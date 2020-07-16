import { Component, OnInit } from '@angular/core';
import { faAward,faCloudUploadAlt,faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  faAward = faAward;
  faCloudUploadAlt = faCloudUploadAlt;
  faCoins = faCoins;

}
