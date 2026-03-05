import {Component, signal, Signal} from '@angular/core';
import {Room} from '../room';

@Component({
  selector: 'app-available-rooms',
  imports: [],
  templateUrl: './available-rooms.html',
  styleUrl: './available-rooms.css',
})
export class AvailableRooms {
  availableRooms!: Signal<Room[]>;
  constructor() {}
  ngOnInit() {
    this.availableRooms = signal(history.state.availableRooms);
  }
}
