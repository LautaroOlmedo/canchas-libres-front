import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UserLogin } from '../../app/interfaces/userLogin';
import { Observable } from 'rxjs';
import {User} from '../../app/interfaces/user';
import {UserRegister} from '../../app/interfaces/userRegister';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    this.AppUrl = environment.userUrl;
    this.APIUrl = '/login';
  }

  login(user: UserLogin): Observable<any> {
    return this.http.post<any>(`${this.AppUrl}$/login`, user);
  }

  register(user: UserRegister): Observable<any> {
    return this.http.post<any>(`${this.AppUrl}/`, user);
  }

  private readonly AppUrl: string;
  private APIUrl: string;
}
