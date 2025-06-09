import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';
import {UserLogin} from '../../interfaces/userLogin';
import {User} from '../../interfaces/user';
import {UserRegister} from '../../interfaces/userRegister';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(  private toast: ToastrService,
                private userService: UserService,
                private router: Router) {

  }
  // -------------------- -------------------- --------------------
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public registerUser() {
    if (this.name == "" || this.lastname == ""||this.email === '' || this.DNI == 0 || this.password === '' || this.phone === '') {
      // Handle empty fields
      this.toast.error('Todos los campos son obligatorios', 'Error');
      return;
    } else {
      // Handle valid login
      const user: UserRegister = {
        firstName: this.name,
        lastName: this.lastname,
        birthdate: this.birthdate,
        email: this.email,
        password: this.password,
        DNI: this.DNI,
        phone: this.phone
      };
      console.log('user:', user);

      this.userService.register(user).subscribe((data) => {
        this.toast.success('Registro exitoso', 'Éxito');
        this.router.navigate(['/login']);
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
  public name: string = "";
  public lastname: string = "";
  public email: string = "";
  public birthdate: Date = new Date();
  public DNI: number = 0;
  public password: string = "";
  //public repeatPassword: string = "";
  public phone: string = "";


}
