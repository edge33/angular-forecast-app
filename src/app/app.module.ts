import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { WeatherConditionItemComponent } from './main/weather-condition-item/weather-condition-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ZipcodeSearchComponent } from './main/zipcode-search/zipcode-search.component';
import { WeatherConditionsListComponent } from './main/weather-conditions-list/weather-conditions-list.component';
import { ForecastComponent } from './forecast/forecast.component';
import { NameBarComponent } from './main/name-bar/name-bar.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ZipcodeSearchComponent,
    WeatherConditionsListComponent,
    WeatherConditionItemComponent,
    MainComponent,
    ForecastComponent,
    NameBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
