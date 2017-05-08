import {Routes, RouterModule} from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";
import { CurrencyComponent } from "./currency/currency.component";
import { MovieComponent } from "./movie/movie.component";
import {AuthGuardService} from './route-guards.service';
const MAINMENU_ROUTES:Routes = [
 { path: '', redirectTo: '/weather', pathMatch: 'full' },
 { path: 'weather', component: WeatherComponent },
 { path: 'currency/:currencyId', component: CurrencyComponent },
 { path: 'currency', component: CurrencyComponent },
 { path: 'movie', component: MovieComponent ,canActivate: [AuthGuardService] }//chec AuthGuardService to activate this route

];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);

