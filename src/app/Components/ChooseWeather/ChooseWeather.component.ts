import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/Services/weatherService.service';
import { Itemp } from 'src/app/Models/weather';
@Component({
  selector: 'app-ChooseWeather',
  templateUrl: './ChooseWeather.component.html',
  styleUrls: ['./ChooseWeather.component.css']
})
export class ChooseWeatherComponent implements OnInit {
  weathers: Itemp = <Itemp>{};
  TimeInput : string;
  DateInput : string;
  date1 : string;
  date2: string;
  date3: string;
  date4: string;
  date5: string;
  date6: string;
  date7: string;
  constructor(private weatherService: WeatherServiceService) {
  }
  ngOnInit() {
    this.getWeather()
  }
  
  getWeather() {
    this.weatherService.getWeather().subscribe((data)=> {
    this.weathers = data;
    this.date1 = this.weathers.hourly.time[0].slice(0,10);
    this.date2 = this.weathers.hourly.time[25].slice(0,10);
    this.date3 = this.weathers.hourly.time[50].slice(0,10);
    this.date4 = this.weathers.hourly.time[75].slice(0,10);
    this.date5 = this.weathers.hourly.time[100].slice(0,10);
    this.date6 = this.weathers.hourly.time[125].slice(0,10);
    this.date7 = this.weathers.hourly.time[150].slice(0,10);
  });
  }
  getDay(userDate: String,userTime: String) : string {
    return String(userDate+'T'+userTime);
  }
}
