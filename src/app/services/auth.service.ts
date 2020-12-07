import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configurations } from '../configurations';

const configs = new Configurations();
const AUTH_API = configs.URL + '/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private configs: Configurations
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  // Login with facebook
  authenticate(credentials: any): void {
    this.http.post(`${this.configs.URL}/signin`, credentials)
      .subscribe(
        resp => console.log(resp),
        error => console.log(error.error.message)
      )
  }

  getAuthLinkForFacebook(): Observable<any> {
    return this.http.get(`${this.configs.URL}/facebookauth/useApplication`)
  }
}
