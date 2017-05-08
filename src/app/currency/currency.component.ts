import { Component, OnInit,ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {FormControl, Validators} from '@angular/forms';
import { SharedService } from "./../shared.service";
import {CurrencyChildComponent} from "./../currency-child/currency-child.component";
import {ArticleService} from './../article.service';
import {EditorArticleService} from './../editor-article.service';

import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
   providers: [
    {provide: ArticleService, useClass: EditorArticleService}
  ]
})
export class CurrencyComponent implements OnInit {
@ViewChild(CurrencyChildComponent) currencyChildComponent:CurrencyChildComponent;

id_currency: string = "";
id_count : number;
title:string="";
titleControl:FormControl = new FormControl(null, Validators.required);
likes:number=0;
outerResolve: any;
outerReject: any;
  my_result: any;
  o1 :any;
  p1:any;
  resolveStatus:string="";
  constructor(private _sharedService: SharedService, private activatedRoute_: ActivatedRoute, private articleService_:ArticleService) {
  this.p1 = new Promise((resolve, reject) => {
this.outerResolve = resolve;
this.outerReject = reject;
});

 this.o1 = Observable.fromPromise(this.p1);
this.o1.subscribe(
// onNext handler
() => {console.log('resolved!');this.resolveStatus="resolved"},
// onError handler
() => console.log('rejected'),
// onCompleted handler
() => console.log('finished!')); 
console.log(activatedRoute_);       // you can get query parameters as well as route parameters
console.log(articleService_.getArticle());

}

  ngOnInit() {
  }
  callCurrencyService() {  
    this._sharedService.getCurrencyExchRate(this.id_currency.toUpperCase())
      .subscribe(
      lstresult => { 
                this.my_result = JSON.stringify(lstresult); 
      },
      error => {
        console.log("Error. The callCurrencyService result JSON value is as follows:");
        console.log(error);
      }
      ); 
 
  }



  updateWordCount(e:number){
  this.id_count = e;
  }

  changeLikesEnabled(e:Event){
  this.currencyChildComponent.setLikeEnabled((<HTMLInputElement>e.target).checked);
  }

  incrementLikes(){
this.likes++;  
this.outerResolve();
  }

  submitTitle(){
  console.log(this.titleControl);
  if(this.titleControl.valid){
  this.title = this.titleControl.value;
  }
  else{
  alert("TitleRequired");
  }
  }
}
