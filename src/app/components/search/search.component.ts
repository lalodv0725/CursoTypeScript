import { Component } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

  constructor(private spotifyServicio:SpotifyService) { }

  artistasEncontrados:any[] = [];
  
  buscarArtista(artistaBuscado:string){
    console.log(artistaBuscado);
    this.spotifyServicio.getArtistas(artistaBuscado)
    .subscribe((dataArtistas:any)=>{
      // console.log("Artistas encontrados - dataArtistas:",dataArtistas);
      // console.log("Artistas encontrados - dataArtistas.artists.items:",dataArtistas.artists.items);
      // this.artistasEncontrados = dataArtistas.artists.items;

      console.log("Artistas encontrados - artistas:",dataArtistas);
      this.artistasEncontrados = dataArtistas;
    });
  }
}
