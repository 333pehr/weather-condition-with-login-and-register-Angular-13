import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itemp } from '../Models/weather';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

constructor(private http: HttpClient) { }
  getWeather(){
    return this.http.get(environment.apiUrl)
    .pipe(map((response)=> response as Itemp))
  }
  getPerson(){
    return this.http.get(environment.jsonUrl)
    .pipe(map((res)=> res as Iuser))
  }
}
