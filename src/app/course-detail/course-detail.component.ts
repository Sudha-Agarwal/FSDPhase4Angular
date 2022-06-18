import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
id;
course;
  constructor(private route: ActivatedRoute, private ds:DataServiceService) {
    this.id = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.ds.getCourseDetailsById(this.id).subscribe(response => this.course = response);

  }

}
