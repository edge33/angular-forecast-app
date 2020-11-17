import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from './weather-info.model';
import { WeatherForecast } from './weather-forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherRetrievalService {
  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${environment.apiEndpoint}weather?zip=${location}&units=metric&appid=${environment.apiKey}`
    );
  }

  getForecast(location: string): Observable<WeatherForecast> {
    return this.http.get<WeatherForecast>(
      `${environment.apiEndpoint}forecast/daily?zip=${location}&units=metric&appid=${environment.apiKey}`
    );
  }
  /**
   * 
   * @param weatherCondition returns correct condition strings for all component displaying icons
   * I outsourced it here for easier maintainance in case of changes.
   */
  getIconString(weatherCondition: string) {
    let condition = weatherCondition.toLowerCase();
    if (condition === 'clear') {
      condition = 'sun';
    }
    return condition;
  }
}
