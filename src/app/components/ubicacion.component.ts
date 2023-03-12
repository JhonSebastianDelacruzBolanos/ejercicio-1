import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'ubicacion',
    templateUrl:'../views/ubicacion.html'
})

export class Ubicacion{
    public titulo: string;
    constructor(){
        this.titulo="Hola desde hubicacion";
    }
}