export interface Recipe {
  id: string;
  title: string;
  description: string;
  minutes: number;
  difficulty: "easy" | "medium" | "hard";
  ingredients_used: string[];    // from what the user typed as available ingredients
  ingredients_missing: string[]; // the "you'll also need" list of ingredients
  steps: string[];
}