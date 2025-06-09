import {Component, Input} from '@angular/core';
import {User} from '../../interfaces/user';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../services/user/user.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor( private toast: ToastrService, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserByEmail()

  }
  getUserByEmail() {
    this.userService.getByEmail(this.authService.getEmail()).subscribe((user: User) => {
      console.log("user obtained in reserve:", user);
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

  public user: User;


}
