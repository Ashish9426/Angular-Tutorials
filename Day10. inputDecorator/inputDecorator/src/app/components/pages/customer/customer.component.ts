import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() msg:any;

  @Output() message=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  send(txt:any){
    console.log(txt)
    this.message.emit(txt)
  }

}
