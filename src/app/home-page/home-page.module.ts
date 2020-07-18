import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-page-routing-module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { CarouselModule } from 'ngx-owl-carousel-o';

const components = [
  HomePageComponent
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    NgxImageGalleryModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
