import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, switchMap, tap} from 'rxjs';
import {CustomerService} from '../customer/customer-service';
import {Customer} from '../../customer';

export interface LoginRequest {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl: string = 'http://localhost:8080/api/auth';
  private customerSubject = new BehaviorSubject<Customer | null>(null);
  customerObservable = this.customerSubject.asObservable();
  constructor(private http: HttpClient, private customerService: CustomerService) {}
  login(data: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data).pipe(
      switchMap(loginResponse => {
        const payload = JSON.parse(atob(loginResponse.token.split('.')[1]));
        return this.customerService.findByEmail(payload.sub);
      }),
      tap((customer: Customer) => {
        this.customerSubject.next(customer);
      })
    )
  }
}
