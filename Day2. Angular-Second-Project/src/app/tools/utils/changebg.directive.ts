import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangebg]'
})
export class ChangebgDirective {

  constructor(private _ele:ElementRef,
    private _render:Renderer2
    ) {
    //console.log(_ele.nativeElement)
      this._render.addClass(this._ele.nativeElement,"bg-info")
   }

}
