import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Field} from '../../app/interfaces/field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) { }

  public setObtainedSharedField(field: Field){
    this.obtainedSharedField = field;
  }

  public getObtainedSharedField(){
    return this.obtainedSharedField;
  }

  private obtainedSharedField: Field
}
