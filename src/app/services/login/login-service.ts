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
  private customerSubject = new BehaviorSubject<Customer | null>(
    this.loadCustomerFromStorage()
  );
  customerObservable = this.customerSubject.asObservable();
  constructor(private http: HttpClient, private customerService: CustomerService) {}
  login(data: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data).pipe(
      switchMap(loginResponse => {
        const payload = JSON.parse(atob(loginResponse.token.split('.')[1]));
        localStorage.setItem('token', loginResponse.token);
        return this.customerService.findByEmail(payload.sub);
      }),
      tap((customer: Customer) => {
        localStorage.setItem('customer', JSON.stringify(customer));
        this.customerSubject.next(customer);
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('customer');
    this.customerSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public loadCustomerFromStorage(): Customer | null {
    const stored = localStorage.getItem('customer');
    return stored ? JSON.parse(stored) : null;
  }
}
