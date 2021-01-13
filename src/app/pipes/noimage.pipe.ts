import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(imagesUrl:any []): string {
    let imgUrl: string = "";

    if (imagesUrl === null || imagesUrl === undefined || imagesUrl.length === 0) {
      imgUrl = "assets/img/noimage.png";
    } else if(imagesUrl.length > 0){
      imgUrl = imagesUrl[0].url;
    }

    //console.log("Imagen Artista: ",imgUrl)
    return imgUrl;
  }

}
