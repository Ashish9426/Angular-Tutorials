import { Component, OnInit } from '@angular/core';
import { EmployeesList } from './employeerecord';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  Employees=EmployeesList
  constructor(private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(param=>{
      const id=param["id"];
     // console.log(id)
      if(id!=undefined)
      this.Employees=EmployeesList.filter(e=>e.deptid==id)
    })
  }

}
