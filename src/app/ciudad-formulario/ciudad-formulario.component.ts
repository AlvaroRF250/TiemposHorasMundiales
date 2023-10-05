import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CiudadService } from '../ciudad.service';


@Component({
  selector: 'ciudad-formulario',
  templateUrl: './ciudad-formulario.component.html',
  styleUrls: ['./ciudad-formulario.component.css']
})
export class CiudadFormularioComponent {
  nombreCiudad: string =''
  temperatura: number| undefined = undefined
  descripcionTiempo: string = '';

  constructor(private http: HttpClient, private ciudadService: CiudadService) { }

  buscarCiudad(){

    const apiKey = '09c98e6ed1eda2ce3a52cbb0e16efcfb'; // Reemplaza con tu clave de API de OpenWeatherMap
    const ciudad = this.nombreCiudad;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {

        this.ciudadService.setCiudad(ciudad)
        // Actualiza las propiedades con los datos de respuesta
        this.temperatura = Math.round(data.main.temp - 273.15) 
        switch (data.weather[0].description) {
          case 'clear sky':
            this.descripcionTiempo = 'cielo despejado';
            break;
          case 'few clouds':
            this.descripcionTiempo = 'pocas nubes';
            break;
          case 'scattered clouds':
            this.descripcionTiempo = 'nubes dispersas';
            break;
          case 'broken clouds':
            this.descripcionTiempo = 'nubes rotas';
            break;
          case 'overcast clouds':
            this.descripcionTiempo = 'nublado';
            break;
          // Agrega más casos según sea necesario
          default:
            this.descripcionTiempo = 'desconocido';
        }
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error al obtener datos del clima:', error);
        // Asegúrate de borrar los valores si la solicitud falla
        this.temperatura = undefined;
        this.descripcionTiempo = '';
      }
    );


  }

}
