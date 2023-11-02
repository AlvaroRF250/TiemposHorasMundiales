import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'ciudad-formulario',
  templateUrl: './ciudad-formulario.component.html',
  styleUrls: ['./ciudad-formulario.component.css']
})
export class CiudadFormularioComponent implements OnInit {
  nombreCiudad: string =''
  temperatura: number| undefined = undefined
  descripcionTiempo: string = '';

  constructor(private http: HttpClient, private ciudadService: CiudadService) { }

  ngOnInit() {
    // Obtén la ciudad desde la dirección IP y actualiza el clima al cargar la página
    this.ciudadService.obtenerCiudadInicialDesdeIP().subscribe((ciudad: string) => {
      this.actualizarClima(ciudad);
    });
  }

  buscarCiudad(){

    const apiKey = '09c98e6ed1eda2ce3a52cbb0e16efcfb'; // Reemplaza con tu clave de API de OpenWeatherMap
    const ciudad = this.nombreCiudad;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {

        this.ciudadService.setCiudad(ciudad)
        // Actualiza las propiedades con los datos de respuesta
        this.temperatura = Math.round(data.main.temp - 273.15) 
        this.descripcionTiempo = data.weather[0].description;
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

  actualizarClima(ciudad: string) {
    const apiKey = '09c98e6ed1eda2ce3a52cbb0e16efcfb'; // Reemplaza con tu clave de API de OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.ciudadService.setCiudad(ciudad);
        this.temperatura = Math.round(data.main.temp - 273.15);

        this.descripcionTiempo = data.weather[0].description;
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

  borrarCiudad() {
    this.nombreCiudad = '';
  }

}