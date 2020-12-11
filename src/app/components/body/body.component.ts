import { NumberSymbol } from '@angular/common';
import {Component} from '@angular/core';


@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})
export class BodyComponent {

    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    }

    mostrar:boolean=true;
    num:number=1;

    personajes:string[] = ["Spiderman","IronMan","Thor","Venom","Dr. Strange"];

    mostrarTarjeta = ():void =>{
        
            this.mostrar=!this.mostrar;
        
    }

}