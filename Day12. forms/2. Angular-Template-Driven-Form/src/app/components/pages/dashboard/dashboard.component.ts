import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders:any;
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQww6dhHWKYT-ZmEynqjAaP-_FUYotI5B-hmg&usqp=CAU"
  constructor(private _router:Router,private _orderService:OrderService) { 
   
  }

  ngOnInit(): void {
    this.Loadproduct()
  }

  logout(){
    this._router.navigate(["/signup"])
  }
  Loadproduct(){
    this._orderService.GetAllOrders().subscribe(r=>{
      console.log(r)
      this.orders=r;
    })
    
  }
}

