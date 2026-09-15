import type { Recipe } from "@/lib/types";

const MOCK_RECIPES: Recipe[] = [
  {
    id: "fried-rice",
    title: "Leftover Fried Rice",
    description:
      "The classic dinner. Best with overnight rice in the fridge.",
    minutes: 15,
    difficulty: "easy",
    ingredients_used: ["rice", "eggs", "soy sauce"],
    ingredients_missing: ["green onion"],
    steps: [
      "Heat oil in your largest pan over medium-high.",
      "Scramble the eggs, then push them to one side.",
      "Add the rice and press it flat for a minute to crisp it up.",
      "Stir everything together with soy sauce and cook 2 more minutes.",
    ],
  },
  {
    id: "garlic-pasta",
    title: "Garlic Butter Pasta",
    description: "Five ingredients, one pot, easily prepared.",
    minutes: 20,
    difficulty: "easy",
    ingredients_used: ["pasta", "butter", "garlic"],
    ingredients_missing: ["parmesan", "parsley"],
    steps: [
      "Boil the pasta and save a cup of the cooking water before draining.",
      "Melt butter with sliced garlic over low heat until fragrant, not brown.",
      "Toss the pasta in the butter, adding pasta water until it turns glossy.",
      "Finish with parmesan off the heat.",
    ],
  },
  {
    id: "tofu-stirfry",
    title: "Crispy Tofu Stir-Fry",
    description: "Press the tofu properly and it actually gets crunchy.",
    minutes: 25,
    difficulty: "medium",
    ingredients_used: ["tofu", "soy sauce", "garlic"],
    ingredients_missing: ["cornstarch", "sesame oil", "broccoli"],
    steps: [
      "Press the tofu between paper towels for 10 minutes, then cube it.",
      "Toss the cubes in cornstarch until evenly coated.",
      "Fry in a hot oiled pan without moving them for 3 minutes per side.",
      "Add the vegetables and sauce, then toss for 2 minutes.",
    ],
  },
];

export async function generateRecipes(ingredients: string[]): Promise<Recipe[]> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (ingredients.length === 0) {
    throw new Error("Add at least one ingredient first.");
  }

  return MOCK_RECIPES;
}
