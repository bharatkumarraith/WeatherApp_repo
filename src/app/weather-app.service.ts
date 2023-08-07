import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  private apiKey = '31bec222c90dee0198aad3fa9a68b6db'; 

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
