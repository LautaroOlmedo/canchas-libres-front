import { Component } from '@angular/core';
import {GetSpecificField} from '../../interfaces/getSpecificField';
import {ReserveService} from '../../../services/reserve/reserve.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Field} from '../../interfaces/field';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-search-field',
  standalone: false,
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
  constructor(private reserveService: ReserveService, private toast: ToastrService) { }

  public ngOnInit() {

  }

  getSpecificField() {
    this.specificField.type = this.fieldType;
    this.specificField.time = this.selectedHour
    this.specificField.date = this.selectedDate;
    console.log("busqueda de cancha: " + this.specificField.type, this.specificField.time, this.specificField.date);
    this.reserveService.getSpecificField(this.specificField).subscribe({
      next: (response: Field | string) => {
        if (typeof response === 'object') {
          this.obtainedSpecificField  = response;
          console.log("Cancha encontrada:", response);
        }  else {
          this.toast.warning('No se encontró cancha', 'Warning');
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.error.message) {
          console.log("Error:", err.error.message);
          this.toast.warning(err.error.message, 'Advertencia');
        } else {
          console.log("Error desconocido:", err);
          this.toast.error('Ocurrió un error. Intente más tarde', 'Error');
        }
      }
    });
  }


  // Método para manejar la búsqueda
  public searchCourts() {
    console.log('Búsqueda realizada con:', {
      tipoCancha: this.fieldType,
      fecha: this.selectedDate,
      hora: this.selectedHour
    });
    // Aquí puedes implementar la lógica de búsqueda
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

}

