import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './../feedback/feedback.component';
import { ArticleComponent } from './article.component';
import {ArticleService} from './../article.service';
import {Mockfeedback} from './mock.feedback';
import {EventEmitter} from '@angular/core';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let articleService : ArticleService;
  let feedbackComponent : FeedbackComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent,Mockfeedback
       ],
      providers : [ArticleService],
      imports : []
    })
    .compileComponents();
  }));

    let clickButton = () => {
  (<HTMLInputElement>document.getElementById("checkBox")).click();
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    feedbackComponent = new Mockfeedback();
    component.feedbackComponent = feedbackComponent;
    fixture.detectChanges();  
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('check incrementLikes', () => {
    component.incrementLikes();
    component.incrementLikes();
    expect(component.likes).toBe(2);
   
  });

    it('check changeLikesEnabled', () => {
   
    clickButton();
    console.log(component);
   expect(component.feedbackComponent.getLikeEnabled()).toBe(true);
  });



});
