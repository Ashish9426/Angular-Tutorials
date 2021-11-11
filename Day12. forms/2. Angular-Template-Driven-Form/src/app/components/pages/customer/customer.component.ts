import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import{Router} from '@angular/router'
import{Title} from '@angular/platform-browser'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  errormessage='';
  formdata:FormGroup;
  constructor(private _router:Router,private _title:Title) {
    this._title.setTitle("Customer")
    this.formdata=new FormGroup({
      "firstname":new FormControl('',Validators.required),
      "lastname":new FormControl('',Validators.required),
      "gender":new FormControl('',Validators.required),
      "dob":new FormControl('',Validators.required),
      "email":new FormControl('',Validators.required),
      "mobile":new FormControl('',Validators.required),
      "password":new FormControl('',Validators.required),
      "confirmpassword":new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {

  }
  submit(){
    //console.log(this.formdata.value)
    //let custom=this.formdata.value;
    //if(custom.firstname=="shail" && custom.lastname=="bhardwaj"  && custom.gender=="female" && custom.dob=="04-09-1997" && custom.email=="shailshikha4997@gmail.com" && custom.mobile=="8178331699" && custom.password=="040997" && custom.confirmpassword=="040997"){
     this._router.navigate(["/signup"])
    //}
    //else{
      //this.errormessage="Invalid User";

    }
  }


