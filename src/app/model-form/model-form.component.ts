import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
myform: FormGroup;
firstName: FormControl;
lastName:FormControl;
email:FormControl;
password:FormControl;

constructor(private ds:DataServiceService,private route:ActivatedRoute, private router:Router) { }


createFormControls(){
  this.firstName = new FormControl("", Validators.required);
   this.lastName = new FormControl("", Validators.required);

   this.email = new FormControl("",[
     Validators.required,
     Validators.pattern("[^ @]*@[^ @]*"),
     this.emailDomainValidator
   ]);

   this.password = new FormControl("", [
     Validators.required,
     Validators.minLength(6)
   ])
}

createForm(){
  this.myform = new FormGroup({
    name: new FormGroup({
      firstName: this.firstName,
      lastName:this.lastName
    }),
    email:this.email,
    password:this.password
  })
}


emailDomainValidator(control:FormControl){
  let email = control.value;
  if(email && email.indexOf("@")!= -1){
    let [_, domain] = email.split("@");
    if(domain !== "gmail.com"){
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
}

onSubmit(data){

  this.ds.createNewUser(data).subscribe(response => {console.log(response);
    this.router.navigate(['/login-form']);   
  },
  err => console.log("error"),
  () => console.log("completed")
  ); 
}

  
  ngOnInit(): void {
    this.createFormControls();
    this.createForm();

  }
}
