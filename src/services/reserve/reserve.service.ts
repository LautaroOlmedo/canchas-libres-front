import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import {GetSpecificField} from '../../app/interfaces/getSpecificField';
import {environment} from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ReserveService {


  constructor(private http: HttpClient) {
    this.AppUrl = environment.userUrl;
    this.APIUrl = '/login';
  }

  getSpecificField(data: GetSpecificField): Observable<any>{
    return this.http.post<any>(`http://localhost:8082/reserve/getFields`, data);
  }

  private readonly AppUrl: string;
  private APIUrl: string;
}
