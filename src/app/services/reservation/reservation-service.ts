import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../../reservation';
import {BehaviorSubject, Observable} from 'rxjs';
import {ReservationState} from '../../reservationState';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl: string = "http://localhost:8080/api/reservations";

  private reservationStateSubject = new BehaviorSubject<ReservationState | null>(null);
  reservationState$ = this.reservationStateSubject.asObservable();

  setSearchParams(checkInDate: string, checkOutDate: string, capacity: number){
    this.reservationStateSubject.next({
      ...this.reservationStateSubject.getValue(),
      checkInDate,
      checkOutDate,
      capacity
    });
  }

  getReservationState(): ReservationState | null {
    return this.reservationStateSubject.getValue();
  }

  constructor(private http: HttpClient) {}

  makeReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }
}
