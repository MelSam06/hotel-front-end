import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl: string = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) {}
  register() {
    let result = this.http.post<RegistrationService>(`${this.apiUrl}/register`, {})
    console.log(result)
  }
}
