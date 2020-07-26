import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

const routes: Routes = [
  {
    path:'',
    component:BlogComponent
  },
  { 
    path: 'view', 
    component: BlogSingleComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
