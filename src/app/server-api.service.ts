import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:4000/users');
  }

  loginUser(data): Observable<any> {
    return this.http.post('http://localhost:4000/login', data);
  }

  getUser(userId): Observable<any> {
    return this.http.get(`htp://localhost:4000/users/${userId}`);
  }

  registerUser(data): Observable<any> {
    return this.http.post('http://localhost:4000/register', data);
  }
}
