import { Component, OnInit, ViewChild } from '@angular/core';
import { faAward, faCloudUploadAlt, faCoins } from '@fortawesome/free-solid-svg-icons';

import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";
import { OwlOptions } from 'ngx-owl-carousel-o';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

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
    inline: true,
    showThumbnails: true,
    thumbnailSize: 50,
    backdropColor: '#1b1a1f',
    showCloseControl: false,
    reactToMouseWheel: true
  };

  // gallery images
  // images: GALLERY_IMAGE[] = [
  //   {
  //     url: "../../assets/img/slider-1.jpg",
  //     altText: 'woman-in-black-blazer-holding-blue-cup',
  //     title: '../../assets/img/slider-1.jpg',
  //     thumbnailUrl: "../../assets/img/slider-1.jpg"
  //   },
  //   
  // ];

  Homepage: any;
  Homepage_about: any;
  Homepage_status: any;
  homepage_gallary = [];

  constructor(db: AngularFireDatabase) {


    db.list('/home-gallary-slider').valueChanges()
      .subscribe(homepage_gallary => {
        this.homepage_gallary = homepage_gallary;
      });

    db.list('/Home-page').valueChanges()
      .subscribe(Homepage => {
        this.Homepage = Homepage;
      });

    db.list('/home-about').valueChanges()
      .subscribe(Homepage_about => {
        this.Homepage_about = Homepage_about;
     
      });

    db.list('/status-home').valueChanges()
      .subscribe(Homepage_status => {
        this.Homepage_status = Homepage_status;
        this.animateValue(document.getElementById('val1'));
        this.animateValue(document.getElementById('val2'));
        this.animateValue(document.getElementById('val3'));
      });

  }

  

  ngOnInit() {

  }


  // =======new number counter
  animateValue(obj, start = 0, end = null, duration = 5000) {
    if (obj) {

      // save starting text for later (and as a fallback text if JS not running and/or google)
      var textStarting = obj.innerHTML;

      // remove non-numeric from starting text if not specified
      end = end || parseInt(textStarting.replace(/\D/g, ""));

      var range = end - start;

      // no timer shorter than 50ms (not really visible any way)
      var minTimer = 50;

      // calc step time to show all interediate values
      var stepTime = Math.abs(Math.floor(duration / range));

      // never go below minTimer
      stepTime = Math.max(stepTime, minTimer);

      // get current time and calculate desired end time
      var startTime = new Date().getTime();
      var endTime = startTime + duration;
      var timer;

      function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        // replace numeric digits only in the original string
        obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
        if (value == end) {
          clearInterval(timer);
        }
      }

      timer = setInterval(run, stepTime);
      run();
    }
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
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
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
