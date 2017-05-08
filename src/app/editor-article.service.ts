import { Injectable } from '@angular/core';
import {Article, ArticleSourceInterface} 
  from './article-source.interface';
  import {ArticleService} from './article.service';


@Injectable()
export class EditorArticleService extends ArticleService implements ArticleSourceInterface{
 private notes_:string = "Swing and a miss!";

getArticle():Article {
	return Object.assign({},super.getArticle(),{notes:this.notes_})
}
}
