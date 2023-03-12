import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing, appRoutingProviders } from './app.routing';

//componentes
import { HomeComponent } from './components/home.component';
import { Ubicacion } from './components/ubicacion.component';
import { OfertasComponent } from './components/ofertas.component';
import { EmpresasComponent } from './components/empresas.component';
import { ContactoComponent } from './components/contacto.component';
import { InicioSesionComponent } from './components/inicioSesion.component';
import { NavegacionComponent } from './components/navegacion.componet';
import { MostrarContactoComponent } from './components/mostrarContacto.component';
import { FootComponent } from './components/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    Ubicacion,
    HomeComponent,
    OfertasComponent,
    EmpresasComponent,
    ContactoComponent,
    InicioSesionComponent,
    NavegacionComponent,
    MostrarContactoComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
