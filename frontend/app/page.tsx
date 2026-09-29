"use client";

import { useState } from "react";
import IngredientInput from "@/components/IngredientInput";
import RecipeCard from "@/components/RecipeCard";
import { generateRecipes } from "@/lib/api";
import type { Recipe } from "@/lib/types";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);

  function addIngredient(raw: string) {
    const name = raw.trim().toLowerCase();
    if (!name) return;
    setIngredients((prev) => (prev.includes(name) ? prev : [...prev, name]));
  }

  function removeIngredient(name: string) {
    setIngredients((prev) => prev.filter((i) => i !== name));
  }

  async function handleGenerate() {
    setIsLoading(true);
    setError(null);

    try {
      const results = await generateRecipes(ingredients);
      setRecipes(results);
      setHasGenerated(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-semibold">What&apos;s Left</h1>
      <p className="mt-1 text-zinc-600">
        Tell me what you have and I&apos;ll tell you what to make.
      </p>

      <div className="mt-8">
        <IngredientInput
          ingredients={ingredients}
          onAdd={addIngredient}
          onRemove={removeIngredient}
        />

        <button
          type="button"
          onClick={handleGenerate}
          disabled={ingredients.length === 0 || isLoading}
          className="mt-4 rounded-lg bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLoading ? "Finding recipes…" : "Generate"}
        </button>
      </div>

      <section className="mt-10">
        {isLoading && (
          <p className="text-zinc-500">Looking through your ingredients…</p>
        )}

        {!isLoading && error && (
          <p className="rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950 dark:text-red-200">
            {error}
          </p>
        )}

        {!isLoading && !error && recipes.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}

        {!isLoading && !error && hasGenerated && recipes.length === 0 && (
          <p className="text-zinc-500">
            No matches yet. Try adding another ingredient.
          </p>
        )}
      </section>
    </main>
  );
}
