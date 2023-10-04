import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(cityOrZip: string) {
    // Assuming you have set up the API URL and have an API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityOrZip}&appid=76ce16b489f4dada6a1fcaae1861db6d`;
    return this.http.get(url);
  }
}
