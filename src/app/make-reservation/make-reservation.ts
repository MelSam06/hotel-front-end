import {Component, signal, Signal} from '@angular/core';
import {Room} from '../room';
import {ReservationService} from '../services/reservation/reservation-service';
import {Reservation} from '../reservation';
import {LoginService} from '../services/login/login-service';
import {ReservationState} from '../reservationState';
import {Customer} from '../customer';
import {Payment} from '../payment';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {ReservationOrder} from '../reservation-order';
import {PaymentsService} from '../services/payment/payments-service';
import {Observable} from 'rxjs';
import {ReservationOrdersService} from '../services/reservation-order/reservation-orders-service';

@Component({
  selector: 'app-make-reservation',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './make-reservation.html',
  styleUrl: './make-reservation.css',
})

export class MakeReservation {
  room!: Room;
  reservationState!: ReservationState | null;
  paymentMethod: string = '';
  customer: Customer | null = null;
  reservation: Reservation = {
    resId: null,
    resOrderId: 0,
    roomNumber: 0,
    checkInDate: '',
    checkOutDate: '',
    price: 0,
  };
  reservationOrder: ReservationOrder = {
    resOrderId: null,
    customerId: 0,
    paymentId: 0,
    orderDate: '',
  }
  payment: Payment = {
    paymentId: null,
    amount: 0,
    paymentMethod: '',
    customerId: 0,
  }

  ngOnInit() {
    this.room = history.state.room;
    this.reservationState = this.reservationService.getReservationState();
    if(this.reservationState) {
      this.reservation.checkInDate = this.reservationState.checkInDate ?? '';
      this.reservation.checkOutDate = this.reservationState.checkOutDate ?? '';
      let checkInDateDate = new Date(this.reservation.checkInDate);
      let checkOutDateDate = new Date(this.reservation.checkOutDate);
      this.reservation.price =  (this.diffInDays(checkOutDateDate, checkInDateDate)
        * this.room.pricePerNight);
    }
    this.reservation.roomNumber = this.room.roomNumber;
    this.loginService.customerObservable.subscribe(customer => {
      this.customer = customer;
      console.log(this.customer);
    });
    this.payment.amount = this.reservation.price;
    this.payment.customerId = this.customer?.custId;
    this.reservationOrder.customerId = this.customer?.custId;
  }

  constructor(private router: Router, private reservationService: ReservationService, private loginService: LoginService,
              private paymentsService: PaymentsService, private reservationOrdersService: ReservationOrdersService) {}

  makeReservation() {
    if (this.customer == null) {
      alert("You must be logged in!");
      this.router.navigate(['login']);
      return;
    }
    if (this.paymentMethod == '') {
      alert("You must select a payment method!");
    } else {
      this.payment.paymentMethod = this.paymentMethod;
      this.paymentsService.create(this.payment).subscribe({
        next: created => {
          this.reservationOrder.paymentId = created.paymentId;
          this.reservationOrder.orderDate = this.getCurrentDate();
          this.reservationOrdersService.create(this.reservationOrder).subscribe({
            next: created => {
              this.reservation.resOrderId = created.resOrderId;
              this.reservationService.makeReservation(this.reservation).subscribe({
                next: created => {
                  console.log(created);
                }
              });
              alert("Reservation made!");
            }
          });
        }
      });
    }
  }

  diffInDays(date1: Date, date2: Date): number {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.abs(date1.getTime() - date2.getTime()) / msPerDay;
  }

  getCurrentDate(): string {
    let now = new Date();
    return now.toISOString().slice(0, 10);
  }
}
