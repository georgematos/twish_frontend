import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = { username: '', password: '' };

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  login(): void {
    console.log(this.credentials)
  }

}
