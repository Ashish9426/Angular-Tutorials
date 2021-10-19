import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatgender'
})
export class FormatgenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    switch(value){
      case 1:
        return "Male"
        break;
      case 0:
        return "Female"
        break;
      default:
        return "Unknown"
        break;
    }
  }

}
