import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [   
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomeModule)
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'our-service',
    loadChildren: () => import('./our-service/our-service.module').then(m => m.OurServiceModule)
  },
  {
    path        : '**',
    pathMatch   : 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
