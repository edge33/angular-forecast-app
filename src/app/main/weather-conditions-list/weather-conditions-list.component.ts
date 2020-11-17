import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-weather-conditions-list',
  templateUrl: './weather-conditions-list.component.html',
  styleUrls: ['./weather-conditions-list.component.css'],
})
export class WeatherConditionsListComponent implements OnInit, OnDestroy {
  locations: string[];
  private locationSubscription: Subscription;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationSubscription = this.locationService.locationsSubject.subscribe((locations) => {
      this.locations = locations;
    });
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
  }
}
