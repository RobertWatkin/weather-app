import { Component, Input } from '@angular/core';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
}

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {
  @Input() weatherData: WeatherData | null = null;

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
