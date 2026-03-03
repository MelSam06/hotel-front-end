import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../../room';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private apiUrl = 'http://localhost:8080/api/rooms';
  constructor(private http: HttpClient) {}
  getRooms():Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}`);
  }
  getRoomsAvailableInDateRange():Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}`);
  }
}
