import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {
  form : FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient) {}

  ngOnInit() {
    this.form= this.formBuilder.group({
      name: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  submit(): void{
    this.http.post(environment.jsonUrl, this.form.getRawValue())
    .subscribe(()=> this.router.navigate(['signin']));
  }
  redirect(){
    this.router.navigate(['signin'])
  }
}
