import { Component, OnInit, ViewChild  } from '@angular/core';
import { faAward,faCloudUploadAlt,faCoins } from '@fortawesome/free-solid-svg-icons';

import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  // get reference to gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  
  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
    inline:true,
    showThumbnails:true,
    thumbnailSize:50,
    backdropColor:'#1b1a1f',
    showCloseControl:false,
    reactToMouseWheel:true
  };
    
  // gallery images
  images: GALLERY_IMAGE[] = [
    {
      url: "../../assets/img/slider-1.jpg", 
      altText: 'woman-in-black-blazer-holding-blue-cup', 
      title: '../../assets/img/slider-1.jpg',
      thumbnailUrl: "../../assets/img/slider-1.jpg"
    },
    {
      url: "../../assets/img/slider-2.jpg", 
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
      extUrl: '../../assets/img/slider-2.jpg',
      thumbnailUrl: "../../assets/img/slider-2.jpg"
    },
    {
      url: "../../assets/img/slider-3.jpg", 
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
      extUrl: '../../assets/img/slider-3.jpg',
      thumbnailUrl: "../../assets/img/slider-3.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    function animateValue(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
          current += increment;
          obj.innerHTML = current;
          if (current == end) {
              clearInterval(timer);
          }
      }, stepTime);
  }
  
  animateValue("value", 50, 140, 5000);
  animateValue("value2", 100, 250, 5000);
  animateValue("value3", 50, 145, 5000);
  }

  faAward = faAward;
  faCloudUploadAlt = faCloudUploadAlt;
  faCoins = faCoins;

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
    
  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }
    
  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }
    
  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }
    
  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
    
  /**************************************************/
    
  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }
 
  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }
 
  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }
  
  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }
 
  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }


  // carousal
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
        items: 4
      }
    },
    nav: true
  }

}
