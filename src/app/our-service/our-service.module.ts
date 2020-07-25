import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServiceRoutingModule } from './our-service-routing.module';
import { OurServiceComponent } from './our-service.component';
import { OurServiceSingleComponent } from './our-service-single/our-service-single.component';



@NgModule({
  declarations: [
    OurServiceComponent, 
    OurServiceSingleComponent
  ],
  imports: [
    CommonModule,
    OurServiceRoutingModule
  ]
})
export class OurServiceModule { }
