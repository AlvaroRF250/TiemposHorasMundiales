import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiempoHorarios';
  nombre:string = "Álvaro Ruiz"
  fechaActual:Date = new Date()

  horas:number = this.fechaActual.getHours()
  mins:number = this.fechaActual.getMinutes()
  sec:number = this.fechaActual.getSeconds()

  horaActual = `${this.horas}:${this.mins}:${this.sec}`
}
