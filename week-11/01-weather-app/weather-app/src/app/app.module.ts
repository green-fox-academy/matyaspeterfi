import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { ForecastContainerComponent } from './forecast-container/forecast-container.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';

const appRoutes: Routes = [
  { path: '', component: WeatherContainerComponent},
  { path: 'dashboard', component: WeatherContainerComponent },
  { path: ':id', component: ForecastContainerComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherContainerComponent,
    WeatherSearchComponent,
    ForecastContainerComponent,
    ForecastCardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
