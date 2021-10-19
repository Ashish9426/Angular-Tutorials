import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router, private _title:Title) {
    this._title.setTitle("Dashboard")
   }

  ngOnInit(): void {
  }

  logout(){
  this._router.navigate(["/login"])
  }
}
