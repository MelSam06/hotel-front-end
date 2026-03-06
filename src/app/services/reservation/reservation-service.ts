import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../../reservation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl: string = "http://localhost:8080/api/reservations";

  constructor(private http: HttpClient) {}

  makeReservation(reservation: Reservation): Observable<Object> {
    return this.http.post(this.apiUrl, reservation);
  }
}
