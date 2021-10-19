import { Component , TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ModalRef?:BsModalRef;
  constructor(private _bsModal:BsModalService){

  }

  AddNew(employee:TemplateRef<any>){
    this.ModalRef=this._bsModal.show(employee);
  }
  CloseModal(){
    this.ModalRef.hide()
  }
}
