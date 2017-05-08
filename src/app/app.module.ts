import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu.component';
import { CONST_ROUTING } from './app.routing';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import { CurrencyComponent } from './currency/currency.component'; 
import { SharedService } from './shared.service';
import { WeatherChildComponent } from './weather-child/weather-child.component';
import { CurrencyChildComponent } from './currency-child/currency-child.component';
import { ClickRevealDirectiveDirective } from './clickRevealDirective/click-reveal-directive.directive';
import { ArticleComponent } from './article/article.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MaxWordCountDirective } from './max-word-count/max-word-count.directive';
import {AuthGuardService} from './route-guards.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    MovieComponent,
    CurrencyComponent,
    WeatherChildComponent,
    CurrencyChildComponent,
    ClickRevealDirectiveDirective,
    ArticleComponent,
    FeedbackComponent,
    MaxWordCountDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [SharedService,  AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
