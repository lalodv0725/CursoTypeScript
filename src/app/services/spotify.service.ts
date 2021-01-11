import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Spotify Service Listo!!");
  }

  getNuevosLanzamientos(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDb4bKkxeMi9m2fSmBEo0wk2OdskTEXRGz_fsRmbjloGORYqCJzcmuRIfnzttY2afqR_C2goXkY8m0LNL0'
    });

    this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=7",
    {headers})
    .subscribe( (data) => {
      console.log(data);
    });
  }
}
