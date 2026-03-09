import {Component, signal, Signal, WritableSignal} from '@angular/core';
import {LoginService} from '../services/login/login-service';
import {ReservationService} from '../services/reservation/reservation-service';
import {Router, RouterLink} from '@angular/router';
import {Reservation} from '../reservation';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-customer-reservations',
  imports: [
    RouterLink
  ],
  templateUrl: './customer-reservations.html',
  styleUrl: './customer-reservations.css',
})
export class CustomerReservations {
  reservations: WritableSignal<Reservation[]> = signal([]);

  constructor(private loginService: LoginService, private reservationService: ReservationService,
              private router: Router) {}

  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      alert("Must be logged in to see reservations!");
      this.router.navigate(['login']);
      return;
    }
    let customer = this.loginService.loadCustomerFromStorage();
    if (customer) {
      this.reservationService.getByCustomerEmail(customer.email).subscribe({
        next: (result) => {
          this.reservations.set(result);
          console.log(this.reservations());
        }
      });
    }
  }
}
