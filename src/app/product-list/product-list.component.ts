import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
sendToChild:string = "Message from parent";

displayCounter(count) {
  alert(count);
}
  constructor() { }

  ngOnInit(): void {
  }

}
