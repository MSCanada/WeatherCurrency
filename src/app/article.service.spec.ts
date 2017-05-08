import { TestBed, inject } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleService]
    });
  });

  it('should ...', inject([ArticleService], (service: ArticleService) => {
    expect(service).toBeTruthy();
  }));

  it('test getArticle', inject([ArticleService], (service: ArticleService) => {
  	let output  = service.getArticle();
    expect(output.title).toBe("Researchers Determine Ham Sandwich Not Turing Complete");
     expect(output.body).toBe("Computer science community remains skeptical");
  }));


});
