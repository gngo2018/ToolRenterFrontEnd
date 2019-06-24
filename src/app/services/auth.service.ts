import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterUser } from '../models/RegisterUser';
import { environment } from 'src/environments/environment';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${environment.Api_Url}api/Auth/Register`, regUserData);
      this._router.navigate(['/login'])
  }

  login(loginInfo){
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this._http.post(`${environment.Api_Url}api/Auth/login`, str).subscribe((token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      this._router.navigate(['/'])
    });
  }
}
