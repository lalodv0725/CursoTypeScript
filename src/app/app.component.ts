import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Iron Man";

  nombre2: string = "laLo aUdItOrE";

  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje: number = 0.42536;

  salario: number = 1234.5;

  fecha: Date = new Date();

  idioma: string = "es";

  activar: boolean = true;

  passwd:string = "ldv 123"

  video: string = "https://www.youtube.com/embed/hYJK3fn_7xk";

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(
      () => {
        resolve("LLego la data")
      }, 5000
    );
  });

  objMutante = {
    nombre: "Logan",
    edad: 40,
    direccion: {
      colonia: "Valle",
      calle: "Primera",
      numero: 20
    }
  }


}
