import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IpService } from './ip.service';


import { AppComponent } from './app.component';
import { HoraActualComponent } from './hora-actual/hora-actual.component';
import { CiudadFormularioComponent } from './ciudad-formulario/ciudad-formulario.component';
import { SueloComponent } from './suelo/suelo.component';

@NgModule({
  declarations: [
    AppComponent,
    HoraActualComponent,
    CiudadFormularioComponent,
    SueloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
