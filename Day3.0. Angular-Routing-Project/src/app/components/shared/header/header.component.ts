import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"

  constructor() { }

  ngOnInit(): void {
  }

}
