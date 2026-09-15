"use client";

import { useState } from "react";
import IngredientInput from "@/components/IngredientInput";
import { generateRecipes } from "@/lib/api";
import type { Recipe } from "@/lib/types";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

      {/* temporary*/}
      <section className="mt-8">
        {error && <p className="text-sm text-red-600">{error}</p>}
        {!error && recipes.length > 0 && (
          <p className="text-zinc-600">{recipes.length} recipes found</p>
        )}
      </section>
    </main>
  );
}
