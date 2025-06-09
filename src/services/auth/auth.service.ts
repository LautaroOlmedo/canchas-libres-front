import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  private email: string = '';
  private id: string = '';

  setId(id: string): void {
    this.id = id;
  }
  getId(): string {
    return this.id;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
}
