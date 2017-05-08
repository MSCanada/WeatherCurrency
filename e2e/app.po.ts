import { browser, element, by } from 'protractor';

export class UpdateFeedPage {
  navigateToWeather() {
    return browser.get('/weather');
  }

  getParagraphText() {
  	console.log(element(by.css('h2')).getText());
    return element(by.css('h2')).getText();
  }

   navigateToMovie() {
    return browser.get('/movie');
  }

    navigateToCurrency() {
    return browser.get('/currency');
  }
}
