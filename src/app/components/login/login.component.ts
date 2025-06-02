import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  // -------------------- -------------------- --------------------
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public getUser() {
    if (this.email === '' || this.password === '') {
      // Handle empty fields
      this.toast.error('Todos los campos son obligatorios', 'Error');
      return;
    } else {
      // Handle valid login
      this.toast.success('Login exitoso', 'Éxito');
    }
  }

  // -------------------- -------------------- --------------------
  email: string = '';
  password: string = '';
}
