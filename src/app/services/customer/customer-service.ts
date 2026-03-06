import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterRequest} from '../registration/registration-service';
import {Customer} from '../../customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  register(data: { firstName: string; lastName: string; dateOfBirth: string; email: string; phone: string; city: string; }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  findByEmail(email: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}?email=${email}`);
  }
}
