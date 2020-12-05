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
  facebookAuthUrl: string | undefined;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.askAuthLinkForFacebook()
  }

  login(): void {
    this.loginService.authenticate(this.credentials)
  }

  askAuthLinkForFacebook() {
    this.loginService.getAuthLinkForFacebook()
      .subscribe((data => this.facebookAuthUrl = data.url))
  }

}
