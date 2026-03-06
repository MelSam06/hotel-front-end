import {Component, signal, Signal} from '@angular/core';
import {Room} from '../room';
import {ReservationService} from '../services/reservation/reservation-service';
import {Reservation} from '../reservation';

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
    roomNumber: this.room.roomNumber,
    checkInDate: '',
    checkOutDate: '',
    price: 0,
  };

  ngOnInit() {
    this.room = history.state.room;
  }

  constructor(private reservationService: ReservationService) {}

  makeReservation() {
    this.reservationService.makeReservation(this.reservation);
  }
}
