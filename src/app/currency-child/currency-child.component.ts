import { Component, OnInit , Output,EventEmitter,Input,Inject,forwardRef} from '@angular/core';
import {CurrencyComponent} from './../currency/currency.component';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-currency-child',
  templateUrl: './currency-child.component.html',
  styleUrls: ['./currency-child.component.css']
})
export class CurrencyChildComponent implements OnInit {
	@Output() countUpdate = new EventEmitter<number>();
  @Input() val:number=0;
    bodyControl:FormControl = new FormControl();
  status : boolean=false;
  wordCountStatus : boolean=false;
   currencyComponent :CurrencyComponent;
   constructor(@Inject(forwardRef(() => CurrencyComponent)) 
      currencyComponent:CurrencyComponent) {

    this.currencyComponent = currencyComponent;
  }

  ngOnInit() {
  }
  emitWordCount(e:Event){
 
   this.countUpdate.emit(
      ((<HTMLTextAreaElement> e.target).value.match(/\S+/g) || []).length);
  }

  incrementLikes(){
 this.currencyComponent.incrementLikes();
   if (this.bodyControl.valid) {
      this.wordCountStatus=true;
    } else {
     this.wordCountStatus=false;
    }
  }

  setLikeEnabled(status:boolean){
this.status=status;
const p3 = new Promise((resolve, reject) => reject())
.then(
() => console.log('resolved!'),
// This second method will immediately be invoked following
// the p3 executor invoking reject()
() => console.log('rejected!'));
// "rejected!"

const p1 = new Promise((resolve, reject) => {
// console.info is the resolve handler,
// console.error is the reject handler
resolve(123);
}).then(console.info, console.error);


  }



}
