import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IpService } from './ip.service';
import { Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  public ciudadInicial: string = ''; // Inicialmente vacío
  private apiUrl = `https://api.api-ninjas.com/v1/iplookup?address=`;
  private apiKey = 'C0eN64NgdUZyOlt044BW3g==qMVWl09FIsWRn1ij';

  constructor(private http: HttpClient, private ipService: IpService) {
    // Obtener la ciudad inicial desde la IP al iniciar el servicio
    this.obtenerCiudadInicialDesdeIP().subscribe((ciudad) => {
      this.ciudadInicial = ciudad;
    });
  }

  public obtenerCiudadInicialDesdeIP(): Observable<string> {
    return this.ipService.obtenerDireccionIp().pipe(
      switchMap((direccionIp: string) => {
        const url = this.apiUrl + direccionIp;
        const headers = new HttpHeaders().set('x-api-key', this.apiKey);

        return this.http.get(url, { headers }).pipe(
          map((data: any) => {
            const ciudad = data.city;
            return ciudad;
          }),
          catchError((error) => {
            console.error('Error al obtener la ciudad por IP:', error);
            return '';
          })
        );
      })
    );
  }

  setCiudad(ciudad: string) {
    this.ciudadInicial = ciudad;
  }

  getCiudad() {
    return this.ciudadInicial;
  }
}
