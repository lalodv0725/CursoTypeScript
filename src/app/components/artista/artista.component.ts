import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  idArtista: string;

  artista: any = {};

  topTracks: any[] = [];

  loadingArtist: boolean;


  constructor(private rutaActiva: ActivatedRoute,
    private spotifyServicio: SpotifyService) {
    this.loadingArtist = true;
    this.rutaActiva.params.subscribe((parametrosUrl) => {
      console.log("Parametros URL:", parametrosUrl);
      this.idArtista = parametrosUrl['id'];

      this.getArtista(this.idArtista);
      this.getTopTracksArtista(this.idArtista);
      
    });
  }

  getArtista(idArtista) {
    this.spotifyServicio.getArtista(idArtista)
      .subscribe((artista: any) => {
        console.log("Artista:", artista);
        this.artista = artista;
        this.loadingArtist = false;
      });
  }

  getTopTracksArtista(idArtista){
    this.spotifyServicio.getTopTracksArtista(idArtista)
    .subscribe((topTracks: any) => {
      console.log("TopTracks del artista:", topTracks);
      this.topTracks = topTracks;
      this.loadingArtist = false;
    });
  }


}
