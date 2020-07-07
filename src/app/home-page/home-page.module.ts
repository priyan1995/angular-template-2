import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-page-routing-module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  HomePageComponent
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
