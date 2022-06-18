import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "My First Project";
  isDisabled:boolean = false;
  imgPath:string = "../assets/download.jpg";
  //TextBinding = "redText";
  titleStyle = 'green';
  titleStyle_exist:boolean = false;

  TitleStyles = {
    'color': 'blue',
    'font-size': '4em'   
  }

  btnClicked(){
   this.title = "Title Changed after button click";
   this.imgPath = "../assets/img_chania.jpg"
   this.isDisabled = true;
   //this.TextBinding = "blueText";
  }

constructor(){}
}
