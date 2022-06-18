import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  public mobiles = [
    {
      sku:"1",
      name:"Samsung",
      price: 10000
    },
    {
      sku:"2",
      name:"Redmi",
      price: 20000
    },
    {
      sku:"3",
      name:"Apple",
      price: 70000
    },
    {
      sku:"4",
      name:"Xiaomi",
      price: 15000
    },
    {
      sku:"5",
      name:"Xiaomi",
      price: 25000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
