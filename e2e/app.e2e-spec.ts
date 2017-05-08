import { UpdateFeedPage } from './app.po';

describe('update-feed App', () => {
  let page: UpdateFeedPage;

  beforeEach(() => {
    page = new UpdateFeedPage();
  });

  it('Weather Station Works', () => {
    page.navigateToWeather();
    expect(page.getParagraphText()).toEqual('Weather Station');
  });

    it('Movie Station Works', () => {
    page.navigateToMovie();
    expect(page.getParagraphText()).toEqual('Movie Station');
  });

    it('Currency Station Works', () => {
    page.navigateToCurrency();
    expect(page.getParagraphText()).toEqual('Currency Station');
  });


});
