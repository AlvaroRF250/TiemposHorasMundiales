import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private apiUrl = 'https://api.ipify.org?format=json';
  

  constructor(private http: HttpClient) {}

  obtenerDireccionIp(): Promise<string> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then((data: any) => {
        // Extrae la dirección IP de la respuesta JSON
        const direccionIp = data.ip;
        return direccionIp;
      })
      .catch(error => {
        console.error('Error al obtener la dirección IP:', error);
        return ''; // Manejar el error de la API
      });
  }
}
