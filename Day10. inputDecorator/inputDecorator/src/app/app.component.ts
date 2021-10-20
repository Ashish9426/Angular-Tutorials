import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputDecorator';
  message = "No message";

  msg:any
  constructor() { }


  receiver(txt:any){
    console.log(txt)
    this.msg = txt;
  }
}
