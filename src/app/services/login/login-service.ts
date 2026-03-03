import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl: string = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) {}
  login(){
    let result = this.http.post<LoginService>(`${this.apiUrl}/login`, {})
    console.log(result)
  }
}
