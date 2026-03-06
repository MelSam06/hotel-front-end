import {Component, signal, Signal} from '@angular/core';
import {Room} from '../room';
import {ReservationService} from '../services/reservation/reservation-service';
import {Reservation} from '../reservation';
import {LoginService} from '../services/login/login-service';
import {ReservationState} from '../reservationState';

@Component({
  selector: 'app-make-reservation',
  imports: [],
  templateUrl: './make-reservation.html',
  styleUrl: './make-reservation.css',
})

export class MakeReservation {
  room!: Room;
  reservationState!: ReservationState | null;
  capacity!: number;
  reservation: Reservation = {
    id: 0,
    resOrderId: 0,
    roomNumber: 0,
    checkInDate: '',
    checkOutDate: '',
    price: 0,
  };

  ngOnInit() {
    this.room = history.state.room;
    this.reservationState = this.reservationService.getReservationState();
    if(this.reservationState) {
      this.reservation.checkInDate = this.reservationState.checkInDate ?? '';
      this.reservation.checkOutDate = this.reservationState.checkOutDate ?? '';
      let checkInDateDate = new Date(this.reservation.checkInDate);
      let checkOutDateDate = new Date(this.reservation.checkOutDate);
      this.reservation.price = (this.reservationState.capacity ?? 0) * (this.diffInDays(checkOutDateDate, checkInDateDate)
        * this.room.pricePerNight);
    }
    this.reservation.roomNumber = this.room.roomNumber;
    this.loginService.customerObservable.subscribe(customer => {
      console.log(customer);
    })
    console.log(this.reservation.checkInDate, this.reservation.checkOutDate, this.reservation.price);
  }

  diffInDays(date1: Date, date2: Date): number {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.abs(date1.getTime() - date2.getTime()) / msPerDay;
  }

  constructor(private reservationService: ReservationService, private loginService: LoginService) {}

  makeReservation() {
    this.reservationService.makeReservation(this.reservation);
  }
}
