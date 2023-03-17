import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginURl: string = '/api/v1/auth/login';
  dataURl: string = '/api/v1/vocubs/all';
  useremail: string = 'supremeLeader1@gmail.com';
  password: string = '_SupremeLeader420';
  constructor(private http: HttpClient) {}

  getToken(useremail: string, password: string): Observable<any> {
    let token = this.http.post(
      this.loginURl,
      {
        emailAddress: useremail,
        password: password,
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        responseType: 'text',
      }
    );
    return token;
  }
}
