import { Component, Input, OnInit } from '@angular/core';
import { Itemp } from 'src/app/Models/weather';
import { WeatherServiceService } from 'src/app/Services/weatherService.service';
@Component({
  selector: 'app-Temperature',
  templateUrl: './Temperature.component.html',
  styleUrls: ['./Temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  @Input('parentData1') public dateTime: string;
  weather: number;
  indexofdate: number;
  getMoodButton: boolean = false;
  constructor(private weatherServise: WeatherServiceService) { 
  }
  weathers: Itemp = <Itemp>{};
  ngOnInit(): void {
  }
  getWeather() {
    this.weatherServise.getWeather().subscribe((data)=> {
    this.weathers = data;
    this.indexofdate = this.weathers.hourly.time.indexOf(this.dateTime);
    this.weather = this.weathers.hourly.temperature_2m[this.indexofdate];
  });
  }
  getMood(){
    let Mood = '';
    
    if(0 <= this.weather && this.weather <= 5){
      Mood = 'Sick';
    }
    else if(5 < this.weather && this.weather <= 10){
      Mood = 'Depressed';
    }
    else if(10 < this.weather && this.weather <= 15){
      Mood = 'Low';
    }
    else if(15 < this.weather && this.weather <= 30){
      Mood = 'Cheerful';
    }
    else if(30 < this.weather && this.weather <= 40){
      Mood = 'Joyful';
    }
    else if(40 < this.weather && this.weather <= 50){
      Mood = 'Bored';
    }
    else if(50 < this.weather){
           Mood = 'Angry';
    }
    
    return Mood;
    }
    getMoodFun(): void{
      this.getMoodButton = true;
    }
}
