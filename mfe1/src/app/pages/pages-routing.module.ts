import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  //routes for Pages module in application mfe1
  {
    path : "pages",
    component : PagesComponent
  },
  {
    path : "",
    redirectTo : "pages",
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
