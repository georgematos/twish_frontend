import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configurations } from '../configurations';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
    private configs: Configurations
  ) { }

  getTodos(): Observable<any> {
    return this.http.get(`${this.configs.URL}/todo`);
  }

}
