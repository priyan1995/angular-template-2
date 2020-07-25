import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurServiceComponent } from './our-service.component';
import { OurServiceSingleComponent } from './our-service-single/our-service-single.component';

const routes: Routes = [
  { 
    path: '', 
    component: OurServiceComponent
  },
  {
    path: 'service-single',
    component: OurServiceSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServiceRoutingModule { }
