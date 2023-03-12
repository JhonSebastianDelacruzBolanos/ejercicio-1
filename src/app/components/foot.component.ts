import { Component } from "@angular/core";

@Component({
    selector: 'foot',
    templateUrl: '../views/foot.html'
})
export class FootComponent{
    public titulo:string;
    constructor(){
        this.titulo="Hola desde foot";
    }
    ngOnInit(){
        console.log('cargado componente foot');
    }
}