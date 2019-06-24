import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterUser } from '../models/RegisterUser';
import { environment } from 'src/environments/environment';

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
    return this._http.post(`${environment.Api_Url}api/Auth/Login`, loginInfo).subscribe( (token: any) => {
      localStorage.setItem('token', token.token);
      this._router.navigate(['/home'])
    });
  }
}
