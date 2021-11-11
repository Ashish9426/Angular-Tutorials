import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import{Router} from '@angular/router'
import { AuthoService } from 'src/app/authentication/autho.service';
import {Title} from '@angular/platform-browser'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errormessage='';
  formdata:FormGroup;
  constructor(private _router:Router,private _authoService:AuthoService,private _title:Title) 
  {
    this._title.setTitle("Sign-up")
    this.formdata=new FormGroup({
      "username":new FormControl('',Validators.required),
      "userpass":new FormControl('',Validators.required)
    })

  }
  ngOnInit(): void {
  }
  submit(){
    console.log(this.formdata.value)
    let user=this.formdata.value;
    if(user.username=="ashish9426@gmail.com" && user.userpass=="Asdf@123"){
      this._authoService.Authentication();
      this._router.navigate(["/dashboard"])
    }
    else{
      this.errormessage="Invalid User!"
    }
  }

}