import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL, EndPoint } from 'ApiRoute/URL';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _httpclient:HttpClient) { }

GetAllOrders(){
  return this._httpclient.get(`${BASEURL}${EndPoint.order}`)
}
DeleteProducts(id:number){
  return this._httpclient.delete(`${BASEURL}${EndPoint.order}/${id}`)
}
CreateProducts(order:any){
  return this._httpclient.post(`${BASEURL}${EndPoint.order}`,order)
 }
}
