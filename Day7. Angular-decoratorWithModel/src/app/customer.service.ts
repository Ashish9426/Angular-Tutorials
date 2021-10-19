import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from './Icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomer {

  constructor(private _http:HttpClient) { }

  GetAllCustomer() {
  return this._http.get('https://tekdi-challenges.appspot.com/api/People')
  }
  EditCustomer(id: number) {
    throw new Error('Method not implemented.');
  }

}
