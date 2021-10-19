import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title="this is the home page"
  message="welcome"
  countries:string[]
  employees:any
  style1={'color':'white','background':'green'}
  style2={'color':'red','background':'blue'}
  obj1={"bg-success":true,"text-danger":true}
  obj2={"bg-danger":true,"text-info":true}
  day=new Date().getDay()
  constructor() { 
    this.countries=["india","usa","china","russiya"]
    this.employees=[]
  }

  loadEmployee(arg:number){
    //alert(arg)
    this.employees=[
      {'id':1,'name':'ajay','gender':1,'salary':13000,'dob':new Date('1997-08-3')},
      {'id':2,'name':'vijay','gender':1,'salary':18000,'dob':new Date('1998-08-3')},
      {'id':3,'name':'rahul','gender':1,'salary':16000,'dob':new Date('1994-05-3')},
      {'id':4,'name':'amit','gender':1,'salary':13900,'dob':new Date('1991-02-3')},
      {'id':5,'name':'riya','gender':0,'salary':14000,'dob':new Date('1995-09-3')}
    ]
  }
  ngOnInit(): void {
  }

}
