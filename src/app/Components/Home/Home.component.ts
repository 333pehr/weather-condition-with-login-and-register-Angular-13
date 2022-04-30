import { Component, OnInit } from '@angular/core';
import { Itemp } from 'src/app/Models/weather';
import { WeatherServiceService } from 'src/app/Services/weatherService.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  weather: number;
  weathers: Itemp = <Itemp>{};
  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    const time = new Date();
    let Hour = time.getHours();
    this.weatherService.getWeather().subscribe((data)=>{
      this.weathers = data;
      this.weather = this.weathers.hourly.temperature_2m[Hour-1];
    })
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
    else if(15 < this.weather && this.weather <= 25){
      Mood = 'Cheerful';
    }
    else if(25 < this.weather && this.weather <= 30){
      Mood = 'Joyful';
    }
    else if(30 < this.weather && this.weather <= 35){
      Mood = 'Bored';
    }
    else{
      Mood = 'Angry';
    }
    return Mood;
    }
    getDate(){
      const time = new Date();
      let day = time.getDate();
      let month = time.getMonth();
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return (months[month]+ " " + day);
    }
}
