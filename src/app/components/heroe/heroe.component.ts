import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

   heroe: Heroe; 

  constructor(private rutaActiva:ActivatedRoute,
              private _heroeService:HeroesService) { 
    //console.log(this.rutaActiva);
    this.rutaActiva.params.subscribe((params) => {
      //console.log(params.id);
      console.log(params['id']);
      console.log(this._heroeService.getHeroe(params['id']));
      this.heroe =this._heroeService.getHeroe(params['id']);
    });
  }


  verLogo():boolean{
    let creador:string = this.heroe.casa.toLowerCase();
    console.log("Creador:"+creador);
    if (creador == 'dc') {
      return true;
    } else {
      return false;
    } 
  }
}