import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
@Input("bindingMessage") message:string;
  constructor() { }

  ngOnInit(): void {
  }

}
