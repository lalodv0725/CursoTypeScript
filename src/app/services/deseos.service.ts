import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];



  constructor() {

    console.log("Servicio inicializado");

    this.cargarSorage();

    // const listaUno = new Lista("Derrotar Valkirias");
    // const listaDos = new Lista("Buscar partes de armadura");  

    // this.listas.push(listaUno,listaDos);

    // console.log("Listas:",this.listas);

  }


  crearLista(tituloLista: string): number {

    const listaNueva = new Lista(tituloLista);
    this.listas.push(listaNueva);
    console.log("Lista Creada:", tituloLista);
    this.guardarStorage();

    return listaNueva.id;

  }

  borrarLista(lista:Lista) {
    this.listas = this.listas.filter( (listadata) => {
      return listadata.id !== lista.id;
    });
    this.guardarStorage();
  }

  editarNombreLista (lista:Lista, nuevoNombre:string){
    lista.titulo = nuevoNombre;
    this.guardarStorage();
  }

  guardarStorage() {

    localStorage.setItem('dataListas', JSON.stringify(this.listas));

  }

  cargarSorage() {

    if (localStorage.getItem('dataListas')) {
      this.listas = JSON.parse(localStorage.getItem('dataListas'));
    } else {
      this.listas = [];
    }

  }

  obtenerLista(id: string | number) {

    id = Number(id);

    const listaObtenida: Lista = this.listas.find((lista) => {
      return lista.id === id;
    });

    return listaObtenida;


  }




}
