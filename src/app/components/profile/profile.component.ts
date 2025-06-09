import {Component, Input} from '@angular/core';
import {User} from '../../interfaces/user';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor( private toast: ToastrService) { }


}
