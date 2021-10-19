import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatname',
  pure:false
})
export class FormatnamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
  if(args[0]=="1"){
    return "Mr. "+value;
  }
    else if(args[0]==0){
      return "Miss. "+value;
    }
    else{
      return value;
    }
  }
}
