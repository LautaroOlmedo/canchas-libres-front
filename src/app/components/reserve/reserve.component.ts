import { Component } from '@angular/core';
import {ReserveService} from '../../../services/reserve/reserve.service';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../interfaces/user';
import {Reserve} from '../../interfaces/reserve';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-reserve',
  standalone: false,
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css'
})
export class ReserveComponent {
constructor(private reserveService: ReserveService, private authService: AuthService, private userService: UserService, private router: Router, private toast: ToastrService,) { }


  ngOnInit(): void {
    this.getUserByEmail()

  }

  getUserByEmail() {
    this.userService.getByEmail(this.authService.getEmail()).subscribe((user: User) => {
      console.log("user obtained in reserve:", user);
      this.user = user;
      this.getAllReserves();

    }, (err: HttpErrorResponse) => {
      if(err.error.message){
        console.log("error:", err.error.msg);
        this.toast.warning(err.error.msg, 'Warning');
      }else{
        this.toast.error(`Oucrrió un error. Intente más tarde`, 'Error');
      }
    })
  }

  getAllReserves() {
    console.log('getAllReserves');
    this.reserveService.getAllReservesByUser(this.user.id).subscribe((reserves: Reserve[]) => {
      for (let reserve of reserves) {
        console.log("reserve", reserve);
        this.reserves.push(reserve);
      }
    },  (err: HttpErrorResponse) => {
      if(err.error.message){
        console.log("error:", err.error.msg);
        this.toast.warning(err.error.msg, 'Warning');
      }else{
        this.toast.error(`Oucrrió un error. Intente más tarde`, 'Error');
      }
    })
  }

  // Añade este método para formatear fechas
  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString('es-ES', {
      timeZone: 'UTC', // ⬅️ Esto mantiene la fecha sin convertirla a tu zona horaria
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }


  public reserves: Reserve[] = []
  public user: User;
}
