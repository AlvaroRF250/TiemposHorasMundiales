import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpService } from './ip.service'; // Importa el servicio de IP


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private apiKey = '09c98e6ed1eda2ce3a52cbb0e16efcfb'

  constructor(private http: HttpClient) { }

  obtenerClima(ciudad: string): Observable<any>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}`

    return this.http.get(url)
  }
}
