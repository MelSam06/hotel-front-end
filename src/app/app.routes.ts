import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ReserveRoom } from './reserve-room/reserve-room';
import {AvailableRooms} from './available-rooms/available-rooms';
import {Login} from './login/login';

export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home},
    { path: 'reserve-room', component: ReserveRoom},
    { path: 'available-rooms', component: AvailableRooms},
    { path: 'login', component: Login}
];
