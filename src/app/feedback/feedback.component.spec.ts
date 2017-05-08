import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ArticleComponent} from './../article/article.component';
import { FeedbackComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackComponent ],
         providers : [ ArticleComponent]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('test updateLikes', () => {
    component.articleComponent.likes = 1;
    component.updateLikes();
     expect(component.val).toBe(1);
    });

    it('test likeArticle', () => {
    component.likeArticle();
    expect(component.val).toBe(1);
    });

      it('test setLikeEnabled', () => {
    component.setLikeEnabled(true);
    expect(component.likeEnabled).toBe(true);
    });

});
