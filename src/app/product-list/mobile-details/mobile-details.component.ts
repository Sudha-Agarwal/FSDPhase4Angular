import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router,ActivatedRoute, Event } from '@angular/router';
import { Mobiles } from 'src/app/mobiles';


@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {
//@Output() Valuechange = new EventEmitter();
 //counter = 0;

 @Input() mobiles: Mobiles = new Mobiles();
 @Output() mobileChange:EventEmitter<Mobiles> = new EventEmitter<Mobiles>();
   
sku;
  constructor(private route:ActivatedRoute, private router:Router) { 
    this.sku = this.route.snapshot.params.id
  }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['products','mobile-list']);

  }

  /*valueChanged(){
    this.counter = this.counter + 1;
    this.Valuechange.emit(this.counter);

  }*/

  update(){
    this.mobileChange.emit(this.mobiles);
  }

 

}
