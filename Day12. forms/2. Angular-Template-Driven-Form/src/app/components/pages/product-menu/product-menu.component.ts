import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
  orders:any;
  constructor(private _orderService:OrderService) { }

  ngOnInit(): void {
    this.LoadProducts()
  }
LoadProducts(){
  this._orderService.GetAllOrders().subscribe(r=>{
    this.orders=r;
  })
}
RemoveProduct(id:number){
  this._orderService.DeleteProducts(id).subscribe((result:any)=>{
    this.LoadProducts()
  })

}

}

