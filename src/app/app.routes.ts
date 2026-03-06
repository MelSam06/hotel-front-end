import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ReserveRoom } from './reserve-room/reserve-room';
import {AvailableRooms} from './available-rooms/available-rooms';
import {Login} from './login/login';
import {Registration} from './registration/registration';
import { Roomsvisibility } from './roomsvisibility/roomsvisibility';
import {MakeReservation} from './make-reservation/make-reservation';
import { Utilities } from './utilities/utilities';

export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home},
    { path: 'reserve-room', component: ReserveRoom},
    { path: 'available-rooms', component: AvailableRooms},
    { path: 'login', component: Login},
    { path : 'registration', component: Registration},
    {path : 'roomsvisibility', component: Roomsvisibility},
    { path : 'make-reservation', component: MakeReservation},
    {path : 'utility_prices', component: Utilities},
];
