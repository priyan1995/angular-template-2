import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomeModule)
  },
  {
    path:'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
