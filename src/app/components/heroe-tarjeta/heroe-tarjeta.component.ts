import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/servicios/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() hero: Heroe;
  @Input() index: number;

  @Output() heroeSeleccinado: EventEmitter<number>;

  constructor(private ruteo:Router) {
    this.heroeSeleccinado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe() {
    // console.log("Indice",this.index);
    // console.log("Heroes",this.hero);
    this.ruteo.navigate(["/heroe",this.index]);
    // console.log("Indice hero tarjeta: ",this.index);
    // this.heroeSeleccinado.emit(this.index);
  }
}
