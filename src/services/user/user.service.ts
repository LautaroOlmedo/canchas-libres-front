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
    return this.http.post<any>(`http://localhost:8080/user/login`, user);
  }

  register(user: UserRegister): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/user/`, user);
  }

  getByEmail(email: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/user/${email}`)
  }

  // getAll(): Observable<any> {
  //   return this.http.get<any>(`${this.AppUrl}/`, user);
  // }

  private readonly AppUrl: string;
  private APIUrl: string;
}
