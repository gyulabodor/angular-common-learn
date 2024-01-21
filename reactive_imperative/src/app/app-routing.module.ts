import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "recipes",
    loadChildren: () =>
      import('./recipe/recipe.module').then((m) => m.RecipeModule)
  },
  //Login + Guard
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
