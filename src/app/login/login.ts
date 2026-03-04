import { Component } from '@angular/core';
import {LoginService} from '../services/login/login-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private loginService: LoginService) {}
  login() {
    this.loginService.login()
  }
}
