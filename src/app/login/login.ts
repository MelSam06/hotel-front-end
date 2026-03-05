import { Component } from '@angular/core';
import {LoginService} from '../services/login/login-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  constructor(private loginService: LoginService) {}
  login() {
    const user = {
      email: this.email,
      password: this.password,
    }
    this.loginService.login(user).subscribe({
        next: () => {
          alert("Login effettuato!");
        },
        error: (err) => {
          console.error(err);
          alert("Errore nel login");
        }
      }
    )
  }
}
