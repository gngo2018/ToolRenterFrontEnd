import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EquipmentTypeService {

  constructor(private _http: HttpClient) { }

  getEquipmentTypes(){
    return this._http.get(`${environment.Api_Url}api/EquipmentType`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }
}
