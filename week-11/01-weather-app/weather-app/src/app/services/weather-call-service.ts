import { environment } from './../../environments/environment.prod';
import { WeatherData } from './../models/weather-data-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  apiCall(): Observable<WeatherData> {
    return this.http.get(`${environment.defUrl}${environment.defCities}${environment.defUnits}${environment.apiKey}`)
    .pipe(map(result => {return result['list']})
    )
  }
}
