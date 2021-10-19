import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  modalRef?: BsModalRef;
  @Input() customerchild;
  formdata:FormGroup
  constructor() { 

    // this.formdata=new FormGroup({
    //   "cname":new FormControl('')
    // })
    console.log(this.customerchild)
    //this.formdata.setValue({"cname":this.customerchild.name})
  }

  ngOnInit(): void {
  }

  submit(){
    
  }
}
