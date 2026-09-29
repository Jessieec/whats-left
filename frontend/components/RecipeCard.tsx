import type { Recipe } from "@/lib/types";

const DIFFICULTY_STYLES: Record<Recipe["difficulty"], string> = {
  easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
  hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold">{recipe.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${
            DIFFICULTY_STYLES[recipe.difficulty]
          }`}
        >
          {recipe.difficulty}
        </span>
      </div>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {recipe.description}
      </p>

      <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
        {recipe.minutes} min
      </p>

      <dl className="mt-4 space-y-1 text-sm">
        <div>
          <dt className="inline text-zinc-500 dark:text-zinc-400">You have: </dt>
          <dd className="inline">{recipe.ingredients_used.join(", ")}</dd>
        </div>
        {recipe.ingredients_missing.length > 0 && (
          <div>
            <dt className="inline text-zinc-500 dark:text-zinc-400">
              You&apos;ll need:{" "}
            </dt>
            <dd className="inline">{recipe.ingredients_missing.join(", ")}</dd>
          </div>
        )}
      </dl>
    </article>
  );
}
