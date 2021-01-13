import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Spotify Service Listo!!");
  }

  getNuevosLanzamientos(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCGVoikCdVXnbpe1HHg_APQzwzhGYVbPe9eaVv4dqzWW5qwCmnaZJ3M0VrR9DER1HQnkt83WYdgYDxArrs'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20",{headers});
    // .subscribe( (data) => {
    //   console.log(data);
    // });
  }

  getArtistas(artista:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCGVoikCdVXnbpe1HHg_APQzwzhGYVbPe9eaVv4dqzWW5qwCmnaZJ3M0VrR9DER1HQnkt83WYdgYDxArrs'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist`,{headers});
  }
}
