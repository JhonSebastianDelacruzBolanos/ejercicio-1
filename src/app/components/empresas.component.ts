import { Component } from "@angular/core";

@Component({
    selector: 'empresas',
    templateUrl: '../views/empresas.html'
})
export class EmpresasComponent{
    public titulo:string;
    constructor(){
        this.titulo="Hola desde Empresas";
    }
    ngOnInit(){
        console.log('cargado componente Empresas');
    }
}