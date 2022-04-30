import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/Home.component';
import { ChooseWeatherComponent } from './Components/ChooseWeather/ChooseWeather.component';
import { SignInComponent } from './Components/SignIn/SignIn.component';
import { SignUpComponent } from './Components/SignUp/SignUp.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'signin', component: SignInComponent},
  {path: 'signup',component: SignUpComponent},
  {path: 'mood',component: ChooseWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}