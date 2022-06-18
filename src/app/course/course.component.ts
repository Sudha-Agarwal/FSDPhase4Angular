import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
courses:any;
  constructor(private ds:DataServiceService) { 

  }

  ngOnInit(): void {
    this.ds.getCourse().subscribe(response => this.courses = response,
    err => alert("Error encountered"),
    () => alert("completed"));

  }

  canExit():boolean{
if(confirm("Do you wish to leave")){
  return true;
}
else{
  return false;
}
  }

}
