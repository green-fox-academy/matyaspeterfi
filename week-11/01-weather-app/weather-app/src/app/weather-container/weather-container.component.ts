import { environment } from './../../environments/environment.prod';
import { WeatherData } from './../models/weather-data-model';
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../services/weather-call-service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {
  weatherInfo: WeatherData;
  searchType: string;

  constructor(private wap: WeatherApiService) { 
    this.searchType = environment.searchTypeGroupId;
  }

  ngOnInit() {
    this.wap.apiCall(environment.searchTypeGroupId, environment.defCities).subscribe((response) => {
      this.weatherInfo = response['list'];
      console.log(response);
    })
  }
}
