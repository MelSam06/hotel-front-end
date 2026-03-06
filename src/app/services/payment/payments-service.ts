import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReservationOrder} from '../../reservation-order';
import {Payment} from '../../payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private apiUrl: string = "http://localhost:8080/api/payments";

  constructor(private http: HttpClient) { }

  create(payment: Payment) {
    return this.http.post(this.apiUrl, payment);
  }
}
