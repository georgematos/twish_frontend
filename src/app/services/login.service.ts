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

  authenticate(): void {
  }

  getAuthLinkForFacebook(): Observable<any> {
    return this.http.get(`${this.configs.URL}/facebookauth/useApplication`)
  }

  logout() {
  }
}
