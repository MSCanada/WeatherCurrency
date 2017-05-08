import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule,Http,Response, ResponseOptions, XHRBackend } from '@angular/http';
import { ArticleComponent } from './../article/article.component';
import { WeatherComponent } from "./weather.component";

import {APP_BASE_HREF} from '@angular/common';
import { MovieComponent } from "./../movie/movie.component";
import {Routes, RouterModule} from '@angular/router';
import { SharedService } from "./../shared.service";
import {ArticleService} from './../article.service';
import {EditorArticleService} from './../editor-article.service';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyComponent } from './../currency/currency.component';
import { CONST_ROUTING } from './../app.routing';
import { MockBackend } from '@angular/http/testing';
import { CurrencyChildComponent } from './../currency-child/currency-child.component';
describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
   const mockResponse = {
          
        "query":{
        "results":{
        "channel":{
        "location":{
        "city":"karachi",
        "region":"sindh",
        "country":"pakistan"
        },
        "item":{
        "condition":{
        "date":"1212",
        "text":"yah",
        "temp":"suha"
        }
        }
        }
        }
        }
        };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyComponent,CurrencyChildComponent,WeatherComponent,MovieComponent,ArticleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[ReactiveFormsModule,FormsModule,HttpModule,RouterModule,CONST_ROUTING],
        providers: [
        SharedService,ArticleService,{provide: APP_BASE_HREF, useValue : '/' },{ provide: XHRBackend, useClass: MockBackend }
       
      ],
    
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

      it('check callWeatherService', inject([XHRBackend], (mockBackend) => {

    component.id_city = "karachi";
    component.id_state = "sindh";

      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

  
        component.callWeatherService();
        console.log(component);
       expect(component.op_city).toBe("karachi");
       expect(component.op_country).toBe("pakistan");
       expect(component.op_date).toBe("1212");
       expect(component.op_region).toBe("sindh");
       expect(component.op_temp).toBe("suha");
       expect(component.op_text).toBe("yah");



  }));

   it('test incrementLikes', () => {
   component.id_cnt =1;
   component.incrementLikes();
   expect(component.id_cnt).toBe(2);
  });


   it('test getEmitter', () => {
  expect(component.getEmitter()).not.toBe(null);
  });


});
