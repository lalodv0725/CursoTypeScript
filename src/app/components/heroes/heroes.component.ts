import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(private _heroesService:HeroesService, 
              private ruteo:Router) { // con solo poner el servicio en parametros ya ejecuta su constructor
    console.log("Constructor HeroesComponent");
   }

  ngOnInit(): void {
    console.log("ngOnInit HeroesComponent");

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(indice:number){
    console.log(indice);
    this.ruteo.navigate(['/heroe',indice]);
  }

}
