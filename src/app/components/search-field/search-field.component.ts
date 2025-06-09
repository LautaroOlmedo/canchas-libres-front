import {Component, Input} from '@angular/core';
import {GetSpecificField} from '../../interfaces/getSpecificField';
import {ReserveService} from '../../../services/reserve/reserve.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Field} from '../../interfaces/field';
import {ToastrService} from 'ngx-toastr';
import {FieldService} from '../../../services/field/field.service';
import {User} from '../../interfaces/user';
import {GenerateReserve} from '../../interfaces/generateReserve';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-search-field',
  standalone: false,
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
  @Input({ required: true }) user!: User;
  constructor(private authService: AuthService, private userService: UserService, private reserveService: ReserveService, private fieldService: FieldService, private toast: ToastrService,  private router: Router) { }

  public ngOnInit() {

  }

  getSpecificField() {
    this.specificField.type = this.fieldType;
    this.specificField.time = this.selectedHour;
    this.specificField.date = this.selectedDate;

    console.log("Busqueda de cancha: ", this.specificField);

    this.reserveService.setReservedHour(this.selectedHour);

    this.reserveService.getSpecificField(this.specificField).subscribe({
      next: (response: Field | string) => {
        if (typeof response === 'object') {
          this.obtainedSpecificField = response;
          console.log("Cancha encontrada:", response);
          this.fieldService.setObtainedSharedField(response);
          this.toast.success(`Cancha encontrada: ${response.name}`);
        } else if (response === 'fields of that type is not available') {
          // Manejo específico para este mensaje de error (si viene como string en "next")
          console.warn("No hay canchas disponibles:", response);
          this.toast.warning('No se encontraron canchas disponibles', 'Advertencia');
          this.obtainedSpecificField = {
            id: "",
            type: "",
            price: 0,
            name: "",
            status: false
          }; // Limpiar el campo obtenido
        }
      },
      error: (err: HttpErrorResponse) => {
        // Manejo de errores HTTP (incluyendo el mensaje específico)
        if (err.error.text === 'fields of that type is not available') {
          console.warn("No hay canchas disponibles (desde error):", err.error.text);
          this.toast.warning('No se encontraron canchas disponibles', 'Advertencia');
          this.obtainedSpecificField   = {
            id: "",
            type: "",
            price: 0,
            name: "",
            status: false
          };
        } else if (err.error.message) {
          console.log("Error:", err.error.message);
          this.toast.warning(err.error.message, 'Advertencia');
        } else {
          console.log("Error desconocido:", err);
          this.toast.error('Ocurrió un error. Intente más tarde', 'Error');
        }
      }
    });
  }



  generateReserve() {
    console.log("user:", this.user.id)
    this.reserve = {
      user_id: this.user.id,
      field_id: this.obtainedSpecificField.id,
      date: this.getCurrentDate(),  // Fecha actual en formato YYYY-MM-DD
      time: this.reserveService.getReservedHour()   // Hora actual en formato HH:MM
    }

    console.log("reserve: ", this.reserve);
    this.reserveService.reserve(this.reserve).subscribe((data) => {
      this.toast.success('Reserva creada con exito', 'Éxito');
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



  public selectedDate: string = new Date().toISOString().split('T')[0];
  public fieldType: string = "futbol 5";
  public selectedHour: string = "15";

  private specificField: GetSpecificField = {
    type: "",
    time: "",
    date: "",
  };
  public obtainedSpecificField: Field = {
    id: "",
    type: "",
    price: 0,
    name: "",
    status: false
  }


  private reserve: GenerateReserve

// Método para obtener la fecha actual en formato YYYY-MM-DD
  private getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear() + 1;
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses son 0-11
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

// Método para obtener la hora actual en formato HH:MM
  private getCurrentTime(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

}

