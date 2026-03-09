import { Component } from '@angular/core';
import {LoginService} from '../services/login/login-service';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {CustomerService} from '../services/customer/customer-service';
import {Customer} from '../customer';
import {observable, Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  constructor(private loginService: LoginService, private customerService: CustomerService, private router: Router) {}
  login() {
    const user = {
      email: this.email,
      password: this.password,
    }
    this.loginService.login(user).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err);
          alert("Errore nel login");
        }
      }
    )
  }
}
