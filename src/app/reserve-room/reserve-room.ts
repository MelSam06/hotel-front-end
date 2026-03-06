import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomsService } from '../services/rooms/rooms-service';
import {BehaviorSubject, firstValueFrom} from 'rxjs';
import {ReservationService} from '../services/reservation/reservation-service';

@Component({
  selector: 'app-reserve-room',
  imports: [ FormsModule ],
  standalone: true,
  templateUrl: './reserve-room.html',
  styleUrl: './reserve-room.css',
})
export class ReserveRoom {
    checkInDateForm: string = ''
    checkOutDateForm: string = ''
    capacity: number = 0;
    constructor(private roomService: RoomsService, private reservationService: ReservationService, private router: Router) {};
    async findAvailableRooms(){
      const checkInDate = new Date(this.checkInDateForm).toISOString().slice(0, 10);
      const checkOutDate = new Date(this.checkOutDateForm).toISOString().slice(0, 10);
      const availableRoomsObs = this.roomService.getRoomsAvailableInDateRange(checkInDate, checkOutDate, this.capacity);
      const availableRooms = await firstValueFrom(availableRoomsObs);
      this.reservationService.setSearchParams(checkInDate, checkOutDate, this.capacity);
      await this.router.navigate(['available-rooms'], {state: {availableRooms}});
    }
}
