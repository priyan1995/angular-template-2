import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})



export class OurServiceComponent implements OnInit {

  our_services;
  
  constructor( db:AngularFireDatabase ) {

    db.list('/service').valueChanges()
    .subscribe(our_services => {
      this.our_services = our_services;
    });

  }

  ngOnInit(): void {
  }

}
