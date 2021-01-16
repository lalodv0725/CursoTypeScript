import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  // paises:any[] = [];

  // constructor(private http:HttpClient) { 
  //   console.log("Constructor del Home");    
  //   this.http.get("https://restcountries.eu/rest/v2/lang/es")
  //   .subscribe( (paises:any) => {
  //     this.paises = paises;
  //     console.log("Constructor del Home - paises: ",this.paises);  
  //   } );
  // }

  nuevosLanzamientos: any[] = [];

  loading: boolean;

  error:boolean= false;
  errorMensaje:string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNuevosLanzamientos()
      .subscribe((albums: any) => {
        // console.log("Nuevos lanzamientos - data: ",data);
        // console.log("Nuevos lanzamientos - data.albums.items: ",data.albums.items);
        // this.nuevosLanzamientos = data.albums.items;

        console.log("Nuevos lanzamientos: ", albums);
        this.nuevosLanzamientos = albums;
        this.loading = false;

      }, (errorServicio:any) => {
        console.log("Error: ",errorServicio);
        console.log("Mensaje Error: ",errorServicio.error.error.message);
        this.errorMensaje =errorServicio.error.error.message
        this.error = true;
        this.loading = false;
      });
  }

}
