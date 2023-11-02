import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpService } from './ip.service'; // Importa el servicio de IP


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private apiKey = 'APIKEY'

  constructor(private http: HttpClient) { }

  obtenerClima(ciudad: string){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}&lang=es`

    return this.http.get(url)
  }
}
