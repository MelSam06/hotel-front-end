import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ReserveRoom } from './reserve-room/reserve-room';

export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home},
    { path: 'reserve-room', component: ReserveRoom}
];
