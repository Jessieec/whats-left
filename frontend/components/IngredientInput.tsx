"use client";

import { useState } from "react";

type Props = {
  ingredients: string[];
  onAdd: (value: string) => void;
  onRemove: (value: string) => void;
};

export default function IngredientInput({ ingredients, onAdd, onRemove }: Props) {
  const [draft, setDraft] = useState("");

  function commit() {
    draft.split(",").forEach((part) => onAdd(part));
    setDraft("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit();
    }

    if (e.key === "Backspace" && draft === "" && ingredients.length > 0) {
      onRemove(ingredients[ingredients.length - 1]);
    }
  }

  return (
    <div>
      <label htmlFor="ingredient" className="block text-sm font-medium">
        What&apos;s in your fridge?
      </label>

      <input
        id="ingredient"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={commit}
        placeholder="eggs, rice, soy sauce…"
        className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-zinc-400"
      />

      {ingredients.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {ingredients.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => onRemove(item)}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                {item}
                <span aria-hidden="true" className="ml-1.5 text-zinc-500 dark:text-zinc-400">×</span>
                <span className="sr-only">Remove {item}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
