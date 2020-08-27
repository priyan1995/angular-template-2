import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-our-service-single',
  templateUrl: './our-service-single.component.html',
  styleUrls: ['./our-service-single.component.css']
})
export class OurServiceSingleComponent implements OnInit {

  servId: number;
  o_service_inner;
  banner

  constructor(
    private route: ActivatedRoute,
    db: AngularFireDatabase
  ) {

    this.route.paramMap.subscribe(params => {

      const servId = +params.get('id');
      if (servId) {
        this.servId = servId - 1;

        db.list('/service/service_items/').valueChanges()
          .subscribe(o_service_inner => {
            this.o_service_inner = o_service_inner[this.servId];
          });


      }
    });
  }

  ngOnInit(): void {
  }

}
