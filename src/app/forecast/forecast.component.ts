import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherRetrievalService } from '../weather-retrieval.service';

interface ForecastDisplayModel {
  date: number;
  min: number;
  main: string;
  icon: string;
  max: number;
}
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  location: string = null;
  city: string = '';
  forecast: ForecastDisplayModel[];
  constructor(
    private route: ActivatedRoute,
    private weatherRetrievalService: WeatherRetrievalService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.location = params.get('location');
      this.weatherRetrievalService
        .getForecast(this.location)
        .subscribe((data) => {
          this.city = data.city.name;
          const relevantList = data.list.slice(1, 6);
          this.forecast = relevantList.map((listItem) => {
            return {
              date: listItem.dt * 1000,
              main: listItem.weather[0].main,
              min: listItem.temp.min,
              max: listItem.temp.max,
              icon: this.weatherRetrievalService.getIconString(
                listItem.weather[0].main
              ),
            } as ForecastDisplayModel;
          });
        });
    });
  }
}
