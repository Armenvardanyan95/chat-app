import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styles: [
    `page-login {background-color: white; color: black;}`,
    `.centered-view {
      width: 80% !important; 
      left: 10% !important; 
      position: absolute !important;
      margin-top: 40px;
    }`,
    `.centered-element {
      margin-top: 20px;
      position: absolute;
      width: 40%;
      left: 30%;
    }`,
    `.sign-up {
      top: 150px;
      left: 42% !important;
    }`
  ]
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
