import { environment } from './../../environments/environment.prod';
import { WeatherData } from './../models/weather-data-model';
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../services/weather-call-service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  userInput: string;
  citySearchInfo: WeatherData
  searchType: string;
  searchTerm: string;

  constructor(private wap: WeatherApiService) {
    this.searchType = environment.searchTypeCity
  }

  doSearch() {
    this.searchTerm = this.userInput;
    this.wap.apiCall(this.searchType, this.searchTerm).subscribe((response) => {
      //response is converted into array so ngfor can use it
      this.citySearchInfo = [response];
    })
  }

  ngOnInit() {
  }

}
