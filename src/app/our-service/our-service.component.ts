import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})



export class OurServiceComponent implements OnInit {

  our_services;
  o_service_itm:any[];
  o_s_i;
  mainimage;
  main_serv_title;
  title


  constructor( db:AngularFireDatabase ) {

    db.list('/service').valueChanges()
    .subscribe(our_services => {
      this.our_services = our_services;
    });

    db.list('/service/service_items').valueChanges()
    .subscribe(o_service_itm => {
      this.o_service_itm = o_service_itm;

    });

  }

  ngOnInit(): void {
  }

}
