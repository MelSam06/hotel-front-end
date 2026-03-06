import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterRequest} from '../registration/registration-service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  register(data: { firstName: string; lastName: string; dateOfBirth: string; email: string; phone: string; city: string; }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
