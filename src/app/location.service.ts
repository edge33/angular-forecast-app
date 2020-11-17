import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: string[];
  locationsSubject = new BehaviorSubject<string[]>([]);
  constructor() { }

  storeLocation(newLocation: string): void {
    if (this.locations.indexOf(newLocation) === -1) {
      this.locations.push(newLocation);
      localStorage.setItem('locations', JSON.stringify(this.locations));
      this.locationsSubject.next(this.locations);
    }
  }

  loadStoredLocations(): void {
    this.locations = JSON.parse(localStorage.getItem('locations'));
    this.locationsSubject.next(this.locations);
  }

  removeLocation(locationToRemove): void {
    const index = this.locations.findIndex((item) => item === locationToRemove);
    if (index !== -1) {
      this.locations = this.locations.slice(0, index).concat(this.locations.slice(index + 1, this.locations.length));
      localStorage.setItem('locations', JSON.stringify(this.locations));
      this.locationsSubject.next(this.locations);
    }
  }
}
