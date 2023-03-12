import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Componentes
import { Ubicacion } from "./components/ubicacion.component";
import { HomeComponent } from "./components/home.component";
import { OfertasComponent } from './components/ofertas.component';
import { EmpresasComponent } from "./components/empresas.component";
import { InicioSesionComponent } from "./components/inicioSesion.component";
import { MostrarContactoComponent } from "./components/mostrarContacto.component";


const appRoutes: Routes=[
    {path: '',component: HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'ubicacion', component:Ubicacion},
    {path: 'ofertas', component:OfertasComponent},
    {path: 'empresas', component:EmpresasComponent},
    {path: 'mostrarContacto', component:MostrarContactoComponent},
    {path: 'inicioSesion', component:InicioSesionComponent},
    {path: '**', component:HomeComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);