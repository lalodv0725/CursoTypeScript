import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], statusCompletado: boolean = true): Lista[] {

    const listasCompletadas: Lista[] = listas.filter( (lista) => {
       return lista.statusCompletado === statusCompletado;
    });

    return listasCompletadas;
  }

}
