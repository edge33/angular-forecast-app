import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from '../../location.service';
import { WeatherData } from '../../weather-info.model';
import { WeatherRetrievalService } from '../../weather-retrieval.service';

@Component({
  selector: 'app-weather-condition-item',
  templateUrl: './weather-condition-item.component.html',
  styleUrls: ['./weather-condition-item.component.css'],
})
export class WeatherConditionItemComponent implements OnInit {
  @Input() location;
  condition: string = null;
  weatherData: WeatherData;

  constructor(
    private locationService: LocationService,
    private weatherRetrievalService: WeatherRetrievalService
  ) {}

  ngOnInit(): void {
    this.weatherRetrievalService.getWeather(this.location).subscribe((data) => {
      this.weatherData = data;
      this.condition = this.weatherRetrievalService.getIconString(this.weatherData.weather[0].main);
    });
  }

  onCloseClick(): void {
    this.locationService.removeLocation(this.location);
  }
}
