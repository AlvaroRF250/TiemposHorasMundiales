import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IpService {
  private apiUrl = 'https://api.ipify.org?format=json';
  

  constructor(private http: HttpClient) {}

  obtenerDireccionIp(): Observable<string> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((data: any) => data.ip),
        catchError(error => {
          console.error('Error al obtener la dirección IP:', error);
          return of(''); // Manejar el error de la API y devolver un valor por defecto
        })
      );
  }
}
