import { Component, OnInit,ContentChild } from '@angular/core';
import {FeedbackComponent} from './../feedback/feedback.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @ContentChild(FeedbackComponent) 
    feedbackComponent:FeedbackComponent;
  likes:number = 0;
  
  incrementLikes():void {
    this.likes++;
  }
  
  changeLikesEnabled(e:Event):void {
    console.log(e);
    this.feedbackComponent.setLikeEnabled((<HTMLInputElement>e.target).checked);
  }

}
