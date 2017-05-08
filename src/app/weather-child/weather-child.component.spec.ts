
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ArticleComponent } from './../article/article.component';
import { WeatherComponent } from "./../weather/weather.component";
import { CurrencyChildComponent } from './../currency-child/currency-child.component';
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

import { WeatherChildComponent } from './weather-child.component';

describe('WeatherChildComponent', () => {
  let component: WeatherChildComponent;
  let fixture: ComponentFixture<WeatherChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherChildComponent,CurrencyComponent,CurrencyChildComponent,WeatherComponent,MovieComponent,ArticleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[ReactiveFormsModule,FormsModule,HttpModule,RouterModule,CONST_ROUTING],
        providers: [
        SharedService,ArticleService,{provide: APP_BASE_HREF, useValue : '/' },WeatherComponent
       
      ],
    
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('test pressed', () => {
 component.count = 1;
    expect(component.count).toBe(1);
  });

});
