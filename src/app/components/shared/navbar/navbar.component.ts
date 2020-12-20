import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(
    private ruteo:Router
  ) { }

  ngOnInit(): void {
  }

  buscarHeroe(terminoABuscar:string){
    console.log(terminoABuscar);
    this.ruteo.navigate(['/heroes',terminoABuscar]);
  }

}
