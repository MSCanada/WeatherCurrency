import { Component, OnInit,Inject,forwardRef} from '@angular/core';
import {ArticleComponent} from './../article/article.component';
import {ArticleService} from './../article.service';
import {EditorArticleService} from './../editor-article.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [ArticleService]
})
export class FeedbackComponent implements OnInit {

 

  ngOnInit() {
  }

    val:number;
   likeEnabled:boolean = false;
   articleComponent:ArticleComponent;
  
  constructor(@Inject(forwardRef(() => ArticleComponent)) 
      articleComponent:ArticleComponent, private articleService_:ArticleService) {

    this.articleComponent = articleComponent;
    this.updateLikes();
  //  console.log(articleService_.getArticle());
  }
  
  updateLikes() {
    this.val = this.articleComponent.likes;
  }
  
  likeArticle():void {
    this.articleComponent.incrementLikes();
    this.updateLikes();
  }
  
  setLikeEnabled(newEnabledStatus:boolean):void {
    this.likeEnabled = newEnabledStatus;
  }

  getLikeEnabled(){
  return this.likeEnabled;
  }

}
