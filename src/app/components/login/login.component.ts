import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/Models/LoginModel';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public LoginModel = new LoginModel();
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  LoginUser(): void {
    this.loginService
      .getToken(this.LoginModel.emailAddress, this.LoginModel.password)
      .subscribe((token: any) => {
        console.log(token);
        localStorage.setItem('jwtToken', token);
      });
  }
}
