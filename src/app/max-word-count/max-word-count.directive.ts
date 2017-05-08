import { Directive } from '@angular/core';
import {Validator, FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxWordCount]',
    inputs: ['rawCount:appMaxWordCount'],
  providers: [{
    provide:NG_VALIDATORS, 
    useExisting: MaxWordCountDirective, 
    multi: true
  }]
})
export class MaxWordCountDirective implements Validator{

  rawCount:string;
  
  validate(c:FormControl):{[key:string]:any} {
    let wordCt:number = 
      ((c.value || '').match(/\S+/g) || []).length;
 
    return wordCt <= this.maxCount ? 
      null :
      {maxwords: {limit:this.maxCount, actual:wordCt}};
  }
  get maxCount():number {
    return parseInt(this.rawCount);
  }

}
