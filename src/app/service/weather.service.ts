import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='0f1775c1b151d23c9165095ca5749485';
  configUrl;

  constructor(private http:HttpClient) { 
    this.configUrl='http://api.openweathermap.org/data/2.5/weather?q='
  }

    getWeather(city){
      return this.http.get(this.configUrl+city+'&appid='+this.apiKey)
    }
  
}
