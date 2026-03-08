import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AsyncPipe, NgIf} from '@angular/common';
import {LoginService} from '../services/login/login-service';
import {Customer} from '../customer';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  customer$: Observable<Customer | null>;

  constructor(private loginService: LoginService, private router: Router) {
    this.customer$ = this.loginService.customerObservable;
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
