import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl: string = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) {}
  login(data: LoginRequest): Observable<any> {
    return this.http.post<LoginService>(`${this.apiUrl}/login`, data)
  }
}
