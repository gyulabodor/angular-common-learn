import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeRoutingModule} from "./recipe-routing.module";
import { RecipePageComponent } from "./recipe-page/recipe-page.component";
import { RecipeFormComponent } from './recipe-form/recipe-form.component';



@NgModule({
  declarations: [RecipePageComponent, RecipeFormComponent],
  imports: [
    RecipeRoutingModule,
    CommonModule
  ]
})
export class RecipeModule { }
