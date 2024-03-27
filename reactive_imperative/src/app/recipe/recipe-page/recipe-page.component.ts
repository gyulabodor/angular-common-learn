import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable, combineLatestWith, startWith } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  operationItem$ = new Observable<Recipe>();
  recipes$ = new Observable<Recipe[]>();

  ngOnInit(): void {
    this.recipes$ = this.recipeService.recipeList$;
    this.operationItem$ = this.operationItem$.pipe(startWith({} as Recipe));
  }

  delete(recipe: Recipe){
    console.log(recipe)
    this.recipeService.delete(recipe);
  }
}
