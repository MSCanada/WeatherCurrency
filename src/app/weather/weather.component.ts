import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  id_city: string = "";
  id_author : string = "suhail";
  id_state: string = "";
  op_city: string = "";
  op_region: string = "";
  op_country: string = "";
  op_date: string = "";
  op_text: string = "";
  op_temp: string = "";
  id_cnt:number=0;

  constructor(private _sharedService: SharedService,private router:Router) { }

  ngOnInit() {
  }

  callWeatherService(){
  this._sharedService.findWeather(this.id_city, this.id_state)
  	.subscribe(  lstresult => { 
       
        this.op_city = lstresult["query"]["results"]["channel"]["location"]["city"];
        this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
        this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
        this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
        this.op_text = lstresult["query"]["results"]["channel"]["item"]["condition"]["text"];
        this.op_temp = lstresult["query"]["results"]["channel"]["item"]["condition"]["temp"]; 
      },
         error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
      }

      )
  }

  incrementLikes(){
  this.id_cnt =this.id_cnt+1;
  }

  getEmitter():Subject<Event>{
  return this._sharedService.getEmitter();

  }

  navigate(){
 this.router.navigate(['movie']);
  }
}
