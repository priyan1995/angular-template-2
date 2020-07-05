import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-page-routing-module';

const components = [
  HomePageComponent
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
