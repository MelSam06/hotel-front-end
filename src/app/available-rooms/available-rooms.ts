import {Component, Signal} from '@angular/core';
import {RoomsService} from '../services/rooms/rooms-service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Room} from '../room';

@Component({
  selector: 'app-available-rooms',
  imports: [],
  templateUrl: './available-rooms.html',
  styleUrl: './available-rooms.css',
})
export class AvailableRooms {
  rooms:Signal<Room[] | undefined>
  constructor(private roomService:RoomsService) {
    const observable = this.roomService.getRooms();
    this.rooms = toSignal(observable);
  }
}
