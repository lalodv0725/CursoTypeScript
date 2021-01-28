import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() statusCompletado: boolean = true;

  constructor(public deseosService: DeseosService,
    private ruta: Router) { }

  ngOnInit() { }

  detalleLista(idLista) {

    if (this.statusCompletado) {
      this.ruta.navigateByUrl(`/tabs/tab2/agregar/${idLista}`);
    } else {
      this.ruta.navigateByUrl(`/tabs/tab1/agregar/${idLista}`);
    }

  }

}
