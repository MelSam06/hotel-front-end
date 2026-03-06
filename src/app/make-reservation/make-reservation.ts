import {Component, signal, Signal} from '@angular/core';
import {Room} from '../room';
import {ReservationService} from '../services/reservation/reservation-service';
import {Reservation} from '../reservation';
import {LoginService} from '../services/login/login-service';

@Component({
  selector: 'app-make-reservation',
  imports: [],
  templateUrl: './make-reservation.html',
  styleUrl: './make-reservation.css',
})

export class MakeReservation {
  room!: Room;
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
    this.reservation.roomNumber = this.room.roomNumber;
  }

  constructor(private reservationService: ReservationService, private loginService: LoginService) {}

  makeReservation() {
    this.reservationService.makeReservation(this.reservation);
  }
}
