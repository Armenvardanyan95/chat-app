import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styles: [
    `page-login {background-color: white; color: black;}`,
    `.centered-view {
      width: 80% !important; 
      left: 10% !important; 
      position: absolute !important;
      margin-top: 40px;
    }`,
    `button {
      margin-top: 20px;
      position: absolute;
      width: 40%;
      left: 30%;
    }`
  ]
})
export class RegisterPage {

  submitted: boolean = false;
  form: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
