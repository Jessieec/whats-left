"use client";

import { useState } from "react";
import IngredientInput from "@/components/IngredientInput";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  function addIngredient(raw: string) {
    const name = raw.trim().toLowerCase();
    if (!name) return;
    setIngredients((prev) => (prev.includes(name) ? prev : [...prev, name]));
  }

  function removeIngredient(name: string) {
    setIngredients((prev) => prev.filter((i) => i !== name));
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
      </div>
    </main>
  );
}
