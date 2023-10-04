import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';  // Import the SearchComponent
import { WeatherDisplayComponent } from './weather-display/weather-display.component';  // Import the WeatherDisplayComponent
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
