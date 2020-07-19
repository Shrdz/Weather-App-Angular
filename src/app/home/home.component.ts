import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherData: any;
  city: string;
  isDisplay = false;
  weatherinfo: string;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void { }

  save() {

    this._weatherService.getWeather(this.city).subscribe(response => {
      this.weatherData = response;
      this.weatherinfo = this.weatherData.weather[0].main;
      if(Object.keys(this.weatherData).length>0){
        this.isDisplay = true;
       }
    },error => {  
      alert('Please check provided input again'); 
      this.isDisplay=false;
     });

  }

}
