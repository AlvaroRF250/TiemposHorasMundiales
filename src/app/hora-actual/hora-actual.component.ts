/* The HoraActualComponent class is a component in an Angular application that displays the current
time for a specific city using the HoraService and CiudadService. */
import { Component } from '@angular/core';
import { HoraService } from '../hora.service';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'hora-actual',
  templateUrl: './hora-actual.component.html',
  styleUrls: ['./hora-actual.component.css']
})
export class HoraActualComponent {

  horaActual: string
  intervalo: any

  constructor(private horaService: HoraService, private ciudadService: CiudadService) {
    this.horaActual = ''
  }

  ngOnInit() {
    this.actualizarHora();
    this.intervalo = setInterval(() => {
      this.actualizarHora()
    }, 500)
  }
  ngOnDestroy(){
    clearInterval(this.intervalo)
  }

  actualizarHora() {

    const ciudad = this.ciudadService.getCiudad();
    this.horaService.obtenerHoraActual(ciudad)
      .then((hora: string) => {
        this.horaActual = hora;
      })
      .catch(error => {
        console.error('Error al obtener la hora actual:', error);
        this.horaActual = ''; // Manejar el error de la API
      });
  }
}

