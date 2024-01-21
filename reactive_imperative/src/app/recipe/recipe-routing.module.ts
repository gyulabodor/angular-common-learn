import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "recipes",
    loadChildren: () =>
      import('../recipe/recipe.module').then((m) => m.RecipeModule)
  },
  {}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
