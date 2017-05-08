import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule ,Http,Response, ResponseOptions, XHRBackend } from '@angular/http';
import { ArticleComponent } from './../article/article.component';
import { WeatherComponent } from "./../weather/weather.component";
import {By} from '@angular/platform-browser';
import { MockBackend } from '@angular/http/testing';
import {APP_BASE_HREF} from '@angular/common';
import { MovieComponent } from "./../movie/movie.component";
import {Routes, RouterModule} from '@angular/router';
import { SharedService } from "./../shared.service";
import {ArticleService} from './../article.service';
import {EditorArticleService} from './../editor-article.service';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyComponent } from './currency.component';
import { CONST_ROUTING } from './../app.routing';

import { CurrencyChildComponent } from './../currency-child/currency-child.component';

   const mockResponse = {
          
           "Title": "Titanic",
           "Rated" : "Plus 5",
           "Released" : "2005",
           "Director" : "Steve",
           "Actors" : "Leon",
           "Plot" : "Plus"
          
        };
  
    let clickButton = () => {
  (<HTMLInputElement>document.getElementById("checkbox")).click();
  };

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;
  let input;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyComponent,CurrencyChildComponent,WeatherComponent,MovieComponent,ArticleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[ReactiveFormsModule,FormsModule,HttpModule,RouterModule,CONST_ROUTING],
        providers: [
        SharedService,ArticleService,{provide: APP_BASE_HREF, useValue : '/' }, { provide: XHRBackend, useClass: MockBackend }
       
      ],
    
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });


  it('should create', () => {
    console.log("end");
    expect(component).toBeTruthy();
  });

      it('check callCurrencyService', inject([XHRBackend], (mockBackend) => {

    component.id_currency = "CAD";   
      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

  
        component.callCurrencyService();
    expect(component.my_result).toBe(JSON.stringify(mockResponse));

  }));

    it('check updateWordCount', () => {
   component.updateWordCount(12);
   expect(component.id_count).toBe(12);
  });

    it('check changeLikesEnabled', () => {
    expect(component.currencyChildComponent.status).toBe(false);
    clickButton();
    expect(component.currencyChildComponent.status).toBe(true);
  });

   it('check incrementLikes', () => {
   expect(component.resolveStatus).toBe("");
   component.incrementLikes();
   expect(component.likes).toBe(1);

  });

     it('submitTitle', () => {
   expect(component.title).toBe("");
  component.titleControl.setValue("suhail");
  component.submitTitle();
  expect(component.title).toBe("suhail");

  
  });



});
