import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IVocubulary } from '../Models/IVocubulary';
import { Vocubulary } from '../Models/Vocubulary';

@Injectable({
  providedIn: 'root',
})
export class VocubService {
  loginURl: string = '/api/v1/auth/login';
  dataURl: string = '/api/v1/vocubs/all';
  useremail: string = 'supremeLeader1@gmail.com';
  password: string = '_SupremeLeader420';
  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    let token = this.http.post(
      this.loginURl,
      {
        emailAddress: this.useremail,
        password: this.password,
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

  getVocubs(token: any): Observable<IVocubulary[]> {
    console.log(token);

    let vocubs = this.http.get<IVocubulary[]>(this.dataURl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(vocubs);

    return vocubs;
  }
}
