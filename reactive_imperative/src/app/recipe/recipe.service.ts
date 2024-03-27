import {Injectable} from "@angular/core";
import { Recipe } from "./recipe.model";
import { BehaviorSubject, concatMap, map, merge, tap } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { API_URL } from "src/environments/env";
import { OperationType } from "../shared/enums/operation-type.enum";
import { RecipeCreateRequest } from "./recipe-create-request.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService{
  constructor(private http: HttpClient){}

  operation$ = new BehaviorSubject<OperationType>(OperationType.READ_ALL)
  recipeList$ = merge(this.operation$).pipe(concatMap(() => this.http.get<Recipe[]>(`${API_URL}/recipes`)));
                        
  create(recipeCreateRequest: RecipeCreateRequest){
    return this.http.post<Recipe>(`${API_URL}/recipes`,recipeCreateRequest)
      .pipe(
        tap(response => console.log(`RecipeService.create() responses: ${response}`)),
        map(() => this.operation$.next(OperationType.CREATE))
      );
  }

  delete(recipe: Recipe){
    return this.http.delete<Recipe>(`${API_URL}/recipes/${recipe.id}`)
      .pipe(
        tap( (response) => console.log(`RecipeService.create() responses: ${response}`)),
        map((response) => {
          this.operation$.next(OperationType.DELETE)
          return response;
        })
      );
  }


}