import { Ingredient } from "../material/ingredient.model";

export interface Recipe {
  id:number;
  name: string;
  ingredients: Ingredient[]
}
