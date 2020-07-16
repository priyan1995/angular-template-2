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

}
