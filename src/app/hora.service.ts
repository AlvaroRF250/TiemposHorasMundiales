import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoraService {
  private apiUrl = 'https://api.api-ninjas.com/v1/worldtime?city='; // URL para obtener la hora de cualquier ciudad
  private apiKey = 'C0eN64NgdUZyOlt044BW3g==qMVWl09FIsWRn1ij'; // Reemplaza con tu propia API key


  constructor(private http: HttpClient) {}

  // Función para obtener la hora actual de la ciudad proporcionada
  obtenerHoraActual(ciudad: string) {
    const url = this.apiUrl + ciudad;
    const headers = new HttpHeaders().set('x-api-key', this.apiKey); // Agregar la API key en los encabezados

    
    return this.http.get(url, { headers })
      .toPromise()
      .then((data: any) => {
        // Suponiendo que data.datetime contiene la hora y fecha en formato deseado
        const hora = data.hour;
        const min = data.minute;

        const horaDeseada = `${hora}:${min}`
        return horaDeseada;
      })
      .catch(error => {
        console.error('Error al obtener la hora actual:', error);
        return ''; // Manejar el error de la API
      });
  }
}

