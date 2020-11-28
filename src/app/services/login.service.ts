import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;

  constructor(
    private http: HttpClient
  ) { }

  authenticate(): void {
  }

  logout() {
  }
}
