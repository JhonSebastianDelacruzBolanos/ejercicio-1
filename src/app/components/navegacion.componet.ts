import { Component } from "@angular/core";

@Component({
    selector: 'navegacion',
    templateUrl: '../views/navegacion.html'
})
export class NavegacionComponent{
    public titulo:string;
    constructor(){
        this.titulo="Hola desde Navegacion";
    }
    ngOnInit(){
        console.log('cargado componente Navegacion');
    }
}