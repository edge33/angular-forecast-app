import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-zipcode-search',
  templateUrl: './zipcode-search.component.html',
  styleUrls: ['./zipcode-search.component.css']
})
export class ZipcodeSearchComponent implements OnInit {
  name: string = '';
  locations = [];
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
  }

  onAddLocationClick(): void {
    if (this.name.length > 0) {
      this.locationService.storeLocation(this.name);
    }
  }
}
