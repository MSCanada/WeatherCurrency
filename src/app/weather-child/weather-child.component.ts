import { Component, OnInit, Input } from '@angular/core';
import {WeatherComponent} from './../weather/weather.component';

@Component({
  selector: 'app-weather-child',
  templateUrl: './weather-child.component.html',
  styleUrls: ['./weather-child.component.css']
})
export class WeatherChildComponent implements OnInit {

	@Input() author : string;
	@Input() count : number;
	private weatherComponent : WeatherComponent;
  constructor(weatherComponent:WeatherComponent) { 
	this.weatherComponent= weatherComponent;
  }

  ngOnInit() {
  }

  pressed(){
  this.count= this.count + 1;
  }

}
