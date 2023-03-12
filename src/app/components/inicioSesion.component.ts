import { Component } from "@angular/core";

@Component({
    selector: 'inicioSesion',
    templateUrl: '../views/inicioSesion.html'
})
export class InicioSesionComponent{
    public titulo:string;
    constructor(){
        this.titulo="Hola desde Inicio de Sesion";
    }
    ngOnInit(){
        console.log('cargado componente de inicio de sesion');
    }
}