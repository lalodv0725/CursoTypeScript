import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalPersonalizado'
})
export class CapitalPersonalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean = true): string {
    //console.log("transform-value: ",value);
    //console.log("transform-args: ",args);
    value = value.toLocaleLowerCase();
    console.log("Valor entrante: ",value);

    let palabras = value.split(' ');

    console.log("Palabras a Capitalizar: ",palabras);

    if(todas){
      palabras = palabras.map((palabra)=>{
        return palabra[0].toUpperCase() + palabra.substr(1);
      });
    }else{
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }

    console.log("Palabras capitalizadas: ",palabras);

    const capitalizado:string = palabras.join(' ');

    return capitalizado;
  }

}
