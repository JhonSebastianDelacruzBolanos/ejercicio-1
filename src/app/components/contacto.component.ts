import { Component } from "@angular/core";

@Component({
    selector: 'contacto',
    templateUrl: '../views/contacto.html'
})
export class ContactoComponent{
    public titulo:string;
    constructor(){
        this.titulo="Hola desde Contacto";
    }
    ngOnInit(){
        console.log('cargado componente Contacto');
    }
}