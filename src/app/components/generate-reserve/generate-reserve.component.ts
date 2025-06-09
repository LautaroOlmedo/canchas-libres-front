import { Component } from '@angular/core';
import {FieldService} from '../../../services/field/field.service';
import {AuthService} from '../../../services/auth/auth.service';
import {UserService} from '../../../services/user/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-generate-reserve',
  standalone: false,
  templateUrl: './generate-reserve.component.html',
  styleUrl: './generate-reserve.component.css'
})
export class GenerateReserveComponent {
  constructor(private authService: AuthService, private userService: UserService, private fieldService: FieldService, private toast: ToastrService,  private router: Router) { }

}
