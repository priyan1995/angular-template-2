import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contact_page;
  cont:any;
  map;
  banner;
  url;
  constructor( db: AngularFireDatabase,private hostElement: ElementRef ) { 

    

    db.list('/contact-page').valueChanges()
    .subscribe( contact_page =>{
      
      this.contact_page = contact_page;
      var cont = this.contact_page[0];
      this.banner = cont.banner_img;
      this.map = cont.map;
      var mp = this.map;

      const iframe = this.hostElement.nativeElement.querySelector('iframe');
      this.url = mp;
      iframe.src = this.url;
    });


  }

  ngOnInit(): void {   
  }

}
