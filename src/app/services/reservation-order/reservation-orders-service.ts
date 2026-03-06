import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReservationOrder} from '../../reservation-order';

@Injectable({
  providedIn: 'root',
})
export class ReservationOrdersService {
  private apiUrl: string = "http://localhost:8080/api/reservation_orders";

  constructor(private http: HttpClient) { }

  create(reservationOrder: ReservationOrder) {
    return this.http.post(this.apiUrl, reservationOrder);
  }
}
