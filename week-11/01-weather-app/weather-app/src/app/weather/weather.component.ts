import { WeatherData } from './../models/weather-data-model';
import { WeatherApiService } from '../services/weather-call-service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weatherInfo: any;
  weatherCall: any;

  constructor() {}

  ngOnInit() {
  }
}
