import { FeedbackComponent } from './../feedback/feedback.component';
import { ArticleComponent } from './article.component';
export class Mockfeedback extends FeedbackComponent {
  constructor(){super(new ArticleComponent() ,null);};

};