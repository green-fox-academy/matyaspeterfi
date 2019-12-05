import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../services/weather-call-service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {
  weatherInfo: any;

  constructor(private wap: WeatherApiService) { }

  ngOnInit() {
    this.wap.apiCall().subscribe((response) => {
      this.weatherInfo = response;
    })
  }
}
