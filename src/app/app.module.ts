import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherServiceService } from './Services/weatherService.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Components/Home/Home.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Layout/Navbar/Navbar.component';
import { FooterComponent } from './Layout/Footer/Footer.component';
import { SignInComponent } from './Components/SignIn/SignIn.component';
import { SignUpComponent } from './Components/SignUp/SignUp.component';
import { TemperatureComponent } from './Components/Temperature/Temperature.component';
import { ChooseWeatherComponent } from './Components/ChooseWeather/ChooseWeather.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    TemperatureComponent,
    ChooseWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
