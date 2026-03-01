import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private apiUrl = 'http://localhost:5000/api/auth';
  router: any;
  constructor(private http: HttpClient) { }
  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
