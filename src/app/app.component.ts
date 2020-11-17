import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  constructor(private locationService: LocationService) {}
  
  
  ngOnInit(): void {
    this.locationService.loadStoredLocations();
  }

}
