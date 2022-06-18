import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {
sku;
  constructor(private route:ActivatedRoute, private router:Router) { 
    this.sku = this.route.snapshot.params.id
  }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['products','mobile-list']);

  }

}
