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
  constructor(private spotify: SpotifyService) {
    this.spotify.getNuevosLanzamientos();
  }

}
