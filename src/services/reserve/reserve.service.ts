import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenerateReserve} from '../../app/interfaces/generateReserve';
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

  getAllReservesByUser(id: string): Observable<any>{
    return this.http.get<any>(`http://localhost:8082/reserve/reservesByUser/${id}`);
  }

  reserve(reserve: GenerateReserve): Observable<any>{
    return this.http.post<any>(`http://localhost:8082/reserve/`, reserve);
  }

  setReservedHour(hour: string){
    this.reservedHour = hour;
  }

  getReservedHour(){
    return this.reservedHour;
  }


  private reservedHour: string


  private readonly AppUrl: string;
  private APIUrl: string;
}
