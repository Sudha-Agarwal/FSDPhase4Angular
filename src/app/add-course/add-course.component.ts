import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Course } from '../course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
course: Course;
  constructor(private ds:DataServiceService, private router: Router) { 
    this.course = new Course();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ds.addCourse(this.course).subscribe(response => this.router.navigate(['/course']));
;
  }

}
