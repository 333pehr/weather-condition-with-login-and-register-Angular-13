import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/user';
import { WeatherServiceService } from 'src/app/Services/weatherService.service';
@Component({
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  index: number;
  users: Iuser = <Iuser>{};
  passMessage: string= '';
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private weatherService: WeatherServiceService) { }

  ngOnInit() {
    this.form= this.formBuilder.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    })
    this.users;
  }
  submit(){
    this.weatherService.getPerson().subscribe((data)=> {
      this.users=data;
      for(let i in this.users){
        if(this.form.getRawValue().username === this.users[i].username)
        {
          if(this.form.getRawValue().password === this.users[i].password){
            this.router.navigate(['mood']);
          }
          else{
            this.passMessage = "Invalid password!";
          }
        }
      }
    })
  }
  redirect(){
    this.router.navigate(['signup']);
  }
}
