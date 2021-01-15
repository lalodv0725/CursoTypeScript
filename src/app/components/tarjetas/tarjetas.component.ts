import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private ruta: Router) { }

  idArtista: string = "";

  verArtista(item: any) {

    console.log("item-tarjeta: ", item);

    if (item.type === "artist") {
      this.idArtista = item.id;
    } else if (item.type === 'album') {
      this.idArtista = item.artists[0].id;
    }

    console.log("idArtista: " + this.idArtista)
    this.ruta.navigate(['artist/', this.idArtista]);

  }


}
