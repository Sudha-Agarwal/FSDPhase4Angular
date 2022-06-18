import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './course';
import { CourseComponent } from './course/course.component';

@Injectable({
  providedIn: 'root'
})
export class IncompleteGuard implements CanDeactivate<CourseComponent> {
  canDeactivate(
    component: CourseComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    return component.canExit();
  }
  
}
