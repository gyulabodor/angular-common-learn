import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeRoutingModule} from "./recipe-routing.module";
import { RecipePageComponent } from "./recipe-page/recipe-page.component";



@NgModule({
  declarations: [RecipePageComponent],
  imports: [
    RecipeRoutingModule,
    CommonModule
  ]
})
export class RecipeModule { }
