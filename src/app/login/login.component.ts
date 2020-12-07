import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  facebookAuthUrl: string | undefined;

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.askAuthLinkForFacebook()
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password)
      .subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
  }

  reloadPage(): void {
    window.location.reload();
  }

  askAuthLinkForFacebook() {
    this.loginService.getAuthLinkForFacebook()
      .subscribe((data => this.facebookAuthUrl = data.url))
  }

}
