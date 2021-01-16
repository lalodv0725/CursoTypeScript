import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Service Listo!!");
  }

  tokenSpotify: string = "QD9sd8VLgAhZPcFfaMN_HznstnixTv4ABmPWGdWDIMW6a01Mg61zVlwJ5kkwtP0uILzIxqZklxvIQXY6l8";

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenSpotify}`
    });

    return this.http.get(url, { headers });

  }



  getNuevosLanzamientos() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data) => {
        return data['albums'].items;
      }));

    //   const headers = new HttpHeaders({
    //     'Authorization': `Bearer ${this.tokenSpotify}`
    //   });

    // this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", { headers })
    //   .pipe(map((data) => {
    //     // return data.albums.items;
    //     return data['albums'].items;
    //   }));
    // // .subscribe( (data) => {
    // //   console.log(data);
    // // });
  }

  searchArtistas(artista: string) {
    return this.getQuery(`search?q=${artista}&type=artist`)
      .pipe(map((data) => {
        return data['artists'].items;
      }));
    //   const headers = new HttpHeaders({
    //     'Authorization': `Bearer ${this.tokenSpotify}`
    //   });
    //   return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist`, { headers })
    //     .pipe(map((data) => {
    //       return data['artists'].items;
    //     }));
    // }
  }

  getArtista(idArtista: string) {
    return this.getQuery(`artists/${idArtista}`);
      // .subscribe((data) => {
      //   console.log("Artista:",data);
      //   return data;
      // });
    
  }

  getTopTracksArtista(idArtista: string) {
    return this.getQuery(`artists/${idArtista}/top-tracks?market=MX`)
    .pipe(map((data) => {
      return data['tracks'];
    }));
      // .subscribe((data) => {
      //   console.log("Artista:",data);
      //   return data;
      // });
    
  }
}
