
import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'weather-app';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  onSearch(cityOrZip: string): void {
    this.weatherService.getWeather(cityOrZip).subscribe(
      data => this.weatherData = data,
      error => console.error(error)
    );
  }
}
