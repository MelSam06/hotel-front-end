import {Component, signal, Signal} from '@angular/core';
import {Room} from '../room';
import {Router, RouterLink} from '@angular/router';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-available-rooms',
  imports: [
    RouterLink,
    CurrencyPipe,
  ],
  templateUrl: './available-rooms.html',
  styleUrl: './available-rooms.css',
})
export class AvailableRooms {
  availableRooms!: Signal<Room[]>;
  reservationData!: Signal<any>;
  constructor(private router: Router) {}
  ngOnInit() {
    this.availableRooms = signal(history.state.availableRooms);
  }
  async goToRoom(room: Room) {
    await this.router.navigate(['make-reservation'], { state: {room: room }});
  }
}
