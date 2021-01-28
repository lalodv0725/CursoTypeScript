import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item-model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  listaObtenida: Lista;

  nombreItem:string = '';


  constructor( private deseosServicio : DeseosService,
                private ruta: ActivatedRoute) {

    const listaId = this.ruta.snapshot.paramMap.get('listaId');

    console.log("Id para obtener lista: ",listaId);

    this.listaObtenida = this.deseosServicio.obtenerLista(listaId);

    console.log("Lista Obtenida: ", this.listaObtenida);
    
  }

  ngOnInit() {
  }

  agregarItemDeLista(){

    if(this.nombreItem.length === 0){
      return;
    }

    const itemLista = new ListaItem(this.nombreItem);

    this.listaObtenida.items.push(itemLista);

    this.nombreItem = '';

    this.deseosServicio.guardarStorage();

  }

  cambioCheck (item:ListaItem){

    console.log("Item cambio Check: ",item);

    const pendientes = this.listaObtenida.items.filter((itemData) => {
      return itemData.statusCompletado === false;
    }).length;

    console.log("Items pendientes: ",pendientes);

    if (pendientes === 0) {
      this.listaObtenida.statusCompletado = true;
      this.listaObtenida.fechaFinalizacion = new Date();
    }else{
      this.listaObtenida.statusCompletado = false;
      this.listaObtenida.fechaFinalizacion = null;
    }

    console.log("Lista ya esta completada: ",this.listaObtenida);    

    this.deseosServicio.guardarStorage();
  }

  borrarItem(indexItem:number){
    console.log("Item a eliminar: ",this.listaObtenida.items[indexItem]);

    this.listaObtenida.items.splice(indexItem,1);

    console.log("Lista Obtenida: ", this.listaObtenida);
    
    this.deseosServicio.guardarStorage();
  }
  

}
