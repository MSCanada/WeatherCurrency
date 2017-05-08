import { TestBed, inject } from '@angular/core/testing';

import { EditorArticleService } from './editor-article.service';

describe('EditorArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorArticleService]
    });
  });

  it('should ...', inject([EditorArticleService], (service: EditorArticleService) => {
    expect(service).toBeTruthy();
  }));

    it('test getArticle', inject([EditorArticleService], (service: EditorArticleService) => {
  	let output  = service.getArticle();
    expect(output.title).toBe("Researchers Determine Ham Sandwich Not Turing Complete");
     expect(output.body).toBe("Computer science community remains skeptical");
     expect(output.notes).toBe("Swing and a miss!");
  }));


});
