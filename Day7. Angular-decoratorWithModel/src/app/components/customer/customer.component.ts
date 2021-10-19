import { Component, OnInit , Input, TemplateRef} from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
@Input() msg;
customers;
modalRef?: BsModalRef;
Classes=["bg-success","bg-danger","bg-info","bg-warning"]
customer;
  constructor(private _customer:CustomerService,
    private modalService: BsModalService
    ) {
   console.log(this.GetRandom)
   }

  ngOnInit(): void {
    this.LoadCustomer()
  }

  public LoadCustomer(){
    this._customer.GetAllCustomer().subscribe(r=>{
     this.customers=r;
    })
  }

  openModal(template: TemplateRef<any>,data) {
    this.customer=data;
   // console.log(data)
    this.modalRef = this.modalService.show(template);
  }

  public get GetRandom(){
    return Math.ceil(Math.random()*4)
  }

}
