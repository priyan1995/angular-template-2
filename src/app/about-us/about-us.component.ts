import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  
  about_page;
  tit:any;
  bnImg;
  mainIm;
  desc

  constructor(db: AngularFireDatabase) { 

    db.list('/about-page').valueChanges()
      .subscribe(about_page => {
        
        this.about_page = about_page;
        var abt = this.about_page[0];
        this.tit = abt.title;
        this.bnImg = abt.banner;
        this.mainIm = abt.mainImg;
        this.desc = abt.main_desc;


      });

  }

  ngOnInit(): void {
  }

  // carousal
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin:10,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

 

}
