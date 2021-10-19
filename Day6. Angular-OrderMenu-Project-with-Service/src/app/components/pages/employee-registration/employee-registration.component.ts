import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  formdata={
    "fname":'',
    "lname":'',
    'email':'',
    'mobile':'',
    'department':'',
    'password':'',
    'confirmpassword':'',
    'address':''
  }
  constructor(private title:Title,
   private _meta:Meta 
    ) {
 this.title.setTitle("Employee-Registration")
 _meta.addTag({name:"Keyword", content:"angular,js,ts,typescript,app,SPA"})
    this.test()
   }

  ngOnInit(): void {
  }

  submit(data:NgForm){
    console.log(data)
  }

  test(x?:number){
    console.log("hi "+x)
  }
}
