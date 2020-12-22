import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: [
    ]
})
export class SearchComponent implements OnInit {

    @Input() hero: Heroe;
    @Input() index: number;

    heroes: Heroe[] = [];
    termino:string;

    constructor(private rutaActiva: ActivatedRoute,
        private _heroeService: HeroesService,
        private ruteo: Router) {


    }

    ngOnInit(): void {

        console.log(this.rutaActiva);
        this.rutaActiva.params.subscribe((params) => {
            console.log(params);
            console.log(params['terminoABuscar']);
            this.termino = params['terminoABuscar'];
            console.log(this._heroeService.buscarHeroes(params['terminoABuscar']));
            this.heroes = this._heroeService.buscarHeroes(params['terminoABuscar']);
            console.log("Heroes",this.heroes);
        });
    }

    verHeroe(){
        // console.log(this.index);
        // this.ruteo.navigate(['/heroe',this.index]);
      }
}
