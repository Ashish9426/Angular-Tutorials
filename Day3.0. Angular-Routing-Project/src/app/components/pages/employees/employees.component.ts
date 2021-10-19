import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  Departments;
  constructor() {
    this.Departments=[
      {"id":1,"name":"IT"},
      {"id":2,"name":"ACCOUNT"},
      {"id":3,"name":"SALES"},
      {"id":4,"name":"HR"},
      {"id":5,"name":"ADMIN"},
      
    ]
   }

  ngOnInit(): void {
  }

}
