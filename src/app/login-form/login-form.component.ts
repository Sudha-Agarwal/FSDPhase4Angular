import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '../user';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

//  user: User;
user = {email:'', password:''};
  constructor(private ds:DataServiceService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form.value);  

    this.ds.checkLogin(this.user).subscribe(response => {console.log(response);
    this.router.navigate(['course']);
    localStorage.setItem("isUserLoggedIn", "true");  
  },
  err => console.log("error"));
  
  }

}
