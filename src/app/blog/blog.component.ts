import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blog_items:any[];

  constructor( db:AngularFireDatabase ) {
    db.list('/blog').valueChanges()
    .subscribe(blog_items => {
      this.blog_items = blog_items;
    });
   }

  ngOnInit(): void {
  }

}
