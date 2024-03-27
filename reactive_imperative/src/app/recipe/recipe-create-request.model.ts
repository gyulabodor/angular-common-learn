import { Ingredient } from "../material/ingredient.model";

export interface RecipeCreateRequest {
    name: string;
    description: string;
    ingredients: Ingredient[];
}
