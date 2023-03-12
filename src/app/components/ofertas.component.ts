import { Component } from "@angular/core";

@Component({
    selector: 'ofertas',
    templateUrl: '../views/ofertas.html'
})
export class OfertasComponent{
    public titulo:string;
    constructor(){
        this.titulo="Hola desde ofertas";
    }
    ngOnInit(){
        console.log('cargado componente Ofertas');
    }
}