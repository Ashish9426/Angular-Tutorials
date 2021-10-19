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
  constructor() { 
    this.countries=["india","usa","china","russiya"]
  }

  ngOnInit(): void {
  }

}
