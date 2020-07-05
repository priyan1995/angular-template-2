import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';


const routes: Routes = [ 
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class HomeRoutingModule { }
