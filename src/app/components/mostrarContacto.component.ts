import { Component } from "@angular/core";

@Component({
    selector: 'mostrarContacto',
    templateUrl: '../views/mostrarContacto.html'
})
export class MostrarContactoComponent{
    public titulo:string;
    constructor(){
        this.titulo="Hola desde Mostrar Contacto";
    }
    ngOnInit(){
        console.log('cargado componente Mostrar Contacto');
    }
}