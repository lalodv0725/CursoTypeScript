import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(idCancion: string, url: string): SafeResourceUrl {

    // console.log("idCancion: ",idCancion);
    // console.log("url Widget spotify: ",url);

    let urlCancion:string = url+idCancion;

    // console.log("URL Cancion: ",urlCancion);
    

    return this.domSanitizer.bypassSecurityTrustResourceUrl(urlCancion);

  }

}
