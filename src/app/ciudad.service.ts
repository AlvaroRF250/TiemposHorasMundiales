import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { IpService } from './ip.service'; // Importa el servicio de IP

@Injectable({
 providedIn: 'root'
})
export class CiudadService {
  public ciudadInicial: string  = 'Seul'; // Inicialmente vacío
  private apiUrl = `https://api.api-ninjas.com/v1/iplookup?address=`
  private apiKey = 'C0eN64NgdUZyOlt044BW3g==qMVWl09FIsWRn1ij'; // Reemplaza con tu propia API key


  constructor(private http: HttpClient, private ipService: IpService) {}

  setCiudad(ciudad: string) {
      this.ciudadInicial = ciudad;
  }

  getCiudad() {
      return this.ciudadInicial;
  }

  // Nuevo m&#233;todo para obtener la ciudad inicial por IP y establecerla
  obtenerCiudadInicialPorIP() {
    
    return this.ipService.obtenerDireccionIp()
      .then(direccionIp => {
        // Usar la dirección IP para obtener la ciudad
        const url = this.apiUrl + direccionIp;


        // Agregar la API key a los encabezados
        const headers = new HttpHeaders().set('x-api-key', this.apiKey);
        ;

        // Realizar la solicitud HTTP con los encabezados
        return this.http.get(url, { headers })
          .toPromise()
          .then((data: any) => {
            // Extraer la ciudad de la respuesta JSON
            const ciudad = data.city;

            // Establecer la ciudad inicial
            this.ciudadInicial = ciudad;

            return ciudad
          })
          .catch(error => {
            console.error('Error al obtener la ciudad por IP:', error);
            // Manejar el error de la API
          });
      });
}
}