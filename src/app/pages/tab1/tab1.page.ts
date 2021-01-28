import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DeseosService,
    private ruta: Router,
    private alertController: AlertController) { }

  getListas = (): Lista[] => {
    //console.log("getListas",this.deseosService.listas);
    return this.deseosService.listas;
  }


  async agregarLista() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      message: 'Establesca el nombre de la nueva Lista',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');

          }
        },
        {
          text: 'Crear',
          handler: (data:any) => {
            console.log("Datos del campo de texto - Alerta: ",data);

            if (data.titulo.length === 0) {
              return;
            }else{
              const idLista = this.deseosService.crearLista(data.titulo);
              //
              this.ruta.navigateByUrl(`/tabs/tab1/agregar/${idLista}`);
            }
            
          }
        }
      ],
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Ejemplo: Lista 1'
        }
      ]
    });

    alert.present();
  }




}
