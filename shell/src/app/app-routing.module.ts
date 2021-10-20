import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //routes for application Shell
  {
    path : "",
    loadChildren : () => import("./home/home.module")
                  .then( (m) => {return m.HomeModule})
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
