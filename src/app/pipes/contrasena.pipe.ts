import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo:boolean): string {
    // console.log("CONTRASENA transform-value: ",value);
    // console.log("CONTRASENA transform-activo: ",activo);

    let password:string = value;

    if (activo) {     
        password = password.replace(/[A-z,0-9,\s]/gi,'*');      
    }
    return password;
  }

}
