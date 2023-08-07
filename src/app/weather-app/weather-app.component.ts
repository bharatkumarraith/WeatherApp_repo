import { Component } from '@angular/core';
import { WeatherAppService } from '../weather-app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent {
  city: string = '';
  weatherData: any;
date:any=new Date();
  constructor(private weatherService: WeatherAppService) {}

  getWeather() {
    this.weatherService.getWeatherByCity(this.city)
      .subscribe(
        (data) => {
          this.weatherData = data;
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }
 
    
  
   

    getTemperatureInCelsius(): string {
      const temperature = this.weatherData.main.feels_like - 273.15;
      return Math.floor(temperature) + '°C';
    }

    getTempInCelsius(): string {
      const temperature = this.weatherData.main.temp - 273.15;
      return Math.floor(temperature) + '°C';
    }

    getTempICelsius(): string {
      const temperature = this.weatherData.main.temp_max - 273.15;
      return Math.floor(temperature) + '°C';
    }

    getTempCelsius(): string {
      const temperature = this.weatherData.main.temp_min - 273.15;
      return Math.floor(temperature) + '°C';
    }
  }
  


