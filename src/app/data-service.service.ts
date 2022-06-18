import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = "http://localhost:8080";
  headers:HttpHeaders;



  constructor(private httpClient:HttpClient) { 
    this.headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  }

  getCourse(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.url + '/courses', { 'headers': this.headers });
  }

  getCourseDetailsById(id){
    const params = new HttpParams().set("id", id);

    return this.httpClient.get(this.url + '/Getcourses',{'headers':this.headers,'params':params})

  }

  addCourse(course: Course){
    console.log(course);
    //const params = new HttpParams()
    //.set("id", id);
    return this.httpClient.post(this.url + '/courses', course, {'headers':this.headers});
  }

  createNewUser(user){
    let userToSend = {email:user.email, firstName: user.name.firstName, lastName: user.name.lastName, password:user.password}
    return this.httpClient.post(this.url + '/createUser', userToSend);
  }

  checkLogin(user){
    console.log(user);
    return this.httpClient.post(this.url + '/users/' + user.email, user)
  }

 
}
