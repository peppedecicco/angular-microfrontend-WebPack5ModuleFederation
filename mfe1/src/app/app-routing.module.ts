import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //routes for application mfe1
  {
    path : "",
    loadChildren : () => import("./pages/pages.module")
                  .then( (m) => { return m.PagesModule})
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
