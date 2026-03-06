import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

export interface UtilityRequest{
  utilityId: number;
  utilityName: string;
  price: number;
  utilityDescription: string;
}
@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private apiUrl: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  findAll(): Observable<UtilityRequest[]>{
    return this.http.get<UtilityRequest[]>(`${this.apiUrl}/utility_prices`);
  }
}
