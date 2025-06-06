import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../interfaces/userLogin';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private toast: ToastrService,
    private userService: UserService,
    private router: Router
  ) {}

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
      const user: UserLogin = {
        email: this.email,
        password: this.password,
      };
      console.log('user:', user);

      this.userService.login(user).subscribe((data) => {
        this.toast.success(`${this.email}`, 'Éxito');
        this.toast.success('Login exitoso', 'Éxito');
        this.router.navigate(['/dashboard']);
      }, (err) => {
        console.log("error:", err)
        this.toast.error(`Usuario no encontrado`, 'Error');
      });
    }
  }

  // -------------------- -------------------- --------------------
  email: string = '';
  password: string = '';
}
