import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() msg:any;
  @Output() message=new EventEmitter();

  employee:any

  constructor() { 
    this.employee = [
      {'id':1,'name':'ajay','gender':1,'salary':13000,'dob':new Date('1997-08-3')},
      {'id':2,'name':'vijay','gender':1,'salary':18000,'dob':new Date('1998-08-3')},
      {'id':3,'name':'rahul','gender':1,'salary':16000,'dob':new Date('1994-05-3')},
      {'id':4,'name':'amit','gender':1,'salary':13900,'dob':new Date('1991-02-3')},
      {'id':5,'name':'riya','gender':0,'salary':14000,'dob':new Date('1995-09-3')}
    ]
  }

  ngOnInit(): void {
  }

  send(txt:any){
    console.log(txt)
    this.message.emit(txt)
  }

}
