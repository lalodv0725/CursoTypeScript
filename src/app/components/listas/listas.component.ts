import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) listaHtml:IonList;

  @Input() statusCompletado: boolean = true;

  constructor(public deseosService: DeseosService,
    private ruta: Router,
    private alertController: AlertController) { }

  ngOnInit() { }

  detalleLista(idLista) {

    if (this.statusCompletado) {
      this.ruta.navigateByUrl(`/tabs/tab2/agregar/${idLista}`);
    } else {
      this.ruta.navigateByUrl(`/tabs/tab1/agregar/${idLista}`);
    }

  }

  borrarLista (lista:Lista){
    
    this.deseosService.borrarLista(lista);
  }


  async editarNombreLista(lista:Lista) {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Editar Nombre de Lista',
      message: 'Establesca el nuevo nombre de la Lista',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.listaHtml.closeSlidingItems();
          }
        },
        {
          text: 'Aceptar',
          handler: (data:any) => {
            if (data.titulo.length === 0) {
              this.listaHtml.closeSlidingItems();
              return;
            }else{
            console.log("Datos del campo de texto - Alerta: ",data);
            this.deseosService.editarNombreLista(lista,data.titulo); 
            this.listaHtml.closeSlidingItems();
            }          
          }
        }
      ],
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Ejemplo: Lista Editada',
          value: lista.titulo
        }
      ]
    });

    alert.present();

  }


}
