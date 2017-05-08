import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ArticleComponent } from './../article/article.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MovieComponent } from './movie.component';
import { HttpModule,Http,Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from "./../weather/weather.component";
import { FeedbackComponent } from './../feedback/feedback.component';
import { SharedService } from "./../shared.service";
import { ClickRevealDirectiveDirective } from './../clickRevealDirective/click-reveal-directive.directive';
import {By} from '@angular/platform-browser';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let directiveEl;
  let directiveInstance;
  let element;
  let button;
   const mockResponse = {
          
           "Title": "Titanic",
           "Rated" : "Plus 5",
           "Released" : "2005",
           "Director" : "Steve",
           "Actors" : "Leon",
           "Plot" : "Plus"
          
        };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent,FeedbackComponent,ArticleComponent ,WeatherComponent,ClickRevealDirectiveDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule,HttpModule],
      providers:[SharedService, { provide: XHRBackend, useClass: MockBackend }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    directiveEl =  fixture.debugElement.query(By.directive(ClickRevealDirectiveDirective));
    directiveInstance = directiveEl.injector.get(ClickRevealDirectiveDirective);
    element = (<HTMLInputElement>document.getElementById("text"));
    button = (<HTMLInputElement>document.getElementById("button"));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('check Directive', () => {
    expect(directiveEl).not.toBeNull();
    expect(directiveInstance.getHeading()).toBe("Hey!");
    element.click();
    expect(element.style.backgroundColor).toBe("red");
   
  });


    it('check Movie Service', inject([XHRBackend], (mockBackend) => {

    component.id_movie = "Titanic";   
      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

  
        component.callMovieService();
   expect(component.mv_Title).toBe("Titanic");
           expect(component.mv_Rated).toBe("Plus 5");
            expect(component.mv_Released).toBe("2005");
             expect(component.mv_Director).toBe("Steve");
              expect(component.mv_Actors).toBe("Leon");
               expect(component.mv_Plot).toBe("Plus"); 


  }));

   it('check Emitter', () => {
   expect(component.getSharedService().getClicks().length).toBe(0);
   button.click();
   expect(component.getSharedService().getClicks().length).toBe(1);
   
   
  });

});
