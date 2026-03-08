import {Component, HostListener, signal} from '@angular/core';
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
  isDropdownOpen = signal(false);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.closeDropdown();
    }
  }

  constructor(private loginService: LoginService, private router: Router) {
    this.customer$ = this.loginService.customerObservable;
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation(); // ← blocca la propagazione al document
    this.isDropdownOpen.set(!this.isDropdownOpen());
    console.log(this.isDropdownOpen);
  }

  closeDropdown() {
    this.isDropdownOpen.set(false);
  }
}
