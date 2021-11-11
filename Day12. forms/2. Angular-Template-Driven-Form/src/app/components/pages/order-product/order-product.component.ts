import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { OrderService } from 'src/app/shared/services/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  orderdata:FormGroup
  constructor(private _orderService:OrderService,private _router:Router) {
    this.orderdata=new FormGroup({
      "product":new FormControl(''),
      "customer":new FormControl('')
})
   }

  ngOnInit(): void {
  }

  submit(){
  
    let order= {...this.orderdata.value};
    order["time"]=new Date()
    this._orderService.CreateProducts(order).subscribe((result:any)=>{
    // setTimeout(() => {
    //   this._router.navigate(["/order-menu"])
    // }, 6000);
      this.orderdata.reset()
    })
  }
}


