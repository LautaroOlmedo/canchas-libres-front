import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../interfaces/user';
import {ReserveService} from '../../../services/reserve/reserve.service';
import {AuthService} from '../../../services/auth/auth.service';
import {Field} from '../../interfaces/field';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService: AuthService, private userService: UserService, private reserveService: ReserveService, private router: Router,  private toast: ToastrService) {}

  // -------------------- -------------------- --------------------
  ngOnInit(): void {
    this.getUserByEmail();
  }

  getUserByEmail() {
    this.userService.getByEmail(this.authService.getEmail()).subscribe((user: User) => {
      console.log("user obtained:", user);
      this.user = user;

    }, (err: HttpErrorResponse) => {
      if(err.error.message){
        console.log("error:", err.error.msg);
        this.toast.warning(err.error.msg, 'Warning');
      }else{
        this.toast.error(`Oucrrió un error. Intente más tarde`, 'Error');
      }
    })
  }

  public field: Field

  public user: User;

}
