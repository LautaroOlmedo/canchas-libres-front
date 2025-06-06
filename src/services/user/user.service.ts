import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UserLogin } from '../../app/interfaces/userLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    this.AppUrl = environment.apiUrl;
    this.APIUrl = 'http://localhost:8080/user/login';
  }

  login(user: UserLogin): Observable<any> {
    return this.http.post<any>(`${this.AppUrl}${this.APIUrl}`, user);
  }

  private AppUrl: string;
  private APIUrl: string;
}
