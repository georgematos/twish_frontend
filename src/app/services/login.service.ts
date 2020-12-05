import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configurations } from '../configurations';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;

  constructor(
    private http: HttpClient,
    private configs: Configurations
  ) { }

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

  logout() {
  }
}
