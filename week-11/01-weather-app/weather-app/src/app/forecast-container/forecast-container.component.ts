import { WeatherData } from './../models/weather-data-model';
import { WeatherApiService } from './../services/weather-call-service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.css']
})
export class ForecastContainerComponent implements OnInit {
  id: any;
  forecastInfo: any;
  cityName: string;
  listItem: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wap: WeatherApiService
  ) { }

  ngOnInit() {
    this.id = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('id'))
    );
    this.wap.apiCall(environment.searchTypeForecastId,this.id.destination.destination._value.id).subscribe((response) => {
      this.forecastInfo = response['list'];
      this.cityName = response['city'].name;
    });
  }
}