import { Component, Input } from '@angular/core';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input({ required: true }) user!: User;

  constructor() {
  }
}
