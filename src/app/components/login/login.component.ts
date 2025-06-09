import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../../services/auth/auth.service';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../interfaces/userLogin';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private toast: ToastrService,
    private authService: AuthService,
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
        this.toast.success(`Login exitoso. Bienvenido/a ${data.firstname}`, 'Éxito');
        this.authService.setEmail(this.email);
        this.router.navigate(['/home']);
      }, (err: HttpErrorResponse) => {
        if(err.error.message){
          console.log("error:", err.error.msg);
          this.toast.warning(err.error.msg, 'Warning');
        }else{
          this.toast.error(`Oucrrió un error. Intente más tarde`, 'Error');
        }
      });
    }
  }

  // -------------------- -------------------- --------------------
  email: string = '';
  password: string = '';
}
