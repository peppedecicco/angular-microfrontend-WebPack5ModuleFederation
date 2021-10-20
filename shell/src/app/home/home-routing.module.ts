import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  //routes for module Home in application shell
  {
    path : "home",
    component : HomeComponent,
    children : [
      {
        //load PagesModule 
        path : "",
        loadChildren : () => import("mfe1/PagesModule")
                      .then( (m) => {return m.PagesModule})
      }
    ]
  },
  {
    path : "",
    redirectTo : "home",
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
