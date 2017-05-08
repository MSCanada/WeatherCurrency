import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from "./../shared.service";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CONST_ROUTING } from './../app.routing';
import {ArticleService} from './../article.service';
import {APP_BASE_HREF} from '@angular/common';
import { CurrencyChildComponent } from './currency-child.component';
import { WeatherComponent } from "./../weather/weather.component";
import {FormControl} from '@angular/forms';
import { MovieComponent } from "./../movie/movie.component";
import { ReactiveFormsModule } from '@angular/forms'
import {CurrencyComponent} from './../currency/currency.component';
import { FormsModule } from '@angular/forms';
import {MaxWordCountDirective} from './../max-word-count/max-word-count.directive';

describe('CurrencyChildComponent', () => {
  let component: CurrencyChildComponent;
  let fixture: ComponentFixture<CurrencyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  CurrencyChildComponent,WeatherComponent,CurrencyComponent,MovieComponent,MaxWordCountDirective],
      imports: [ReactiveFormsModule,HttpModule,CONST_ROUTING,FormsModule],
      providers : [ CurrencyComponent,SharedService,{provide: APP_BASE_HREF, useValue : '/' },ArticleService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('test emitWordCount', (done) => {
    component.countUpdate.subscribe(g => {
               expect(g).toEqual(5);
               done();
            });

   component.countUpdate.emit(5);
  
  });

   it('test setLikeEnabled', () => {
    component.setLikeEnabled(true);
    expect(component.status).toBe(true);
  });

   it('test incrementLikes', () => {
   
   component.bodyControl.setValue("suhail is best");
    component.incrementLikes();
    expect(component.wordCountStatus).toBe(true);
    expect(component.currencyComponent.likes).toBe(1);

    component.bodyControl.setValue("suhail is best sd");
    component.incrementLikes();
    expect(component.wordCountStatus).toBe(false);
  });


});
