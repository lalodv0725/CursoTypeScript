"use strict";
(() => {
    // class Avenger {
    //     nombre:string = "Sin Nombre";
    //     poder:string;
    //     equipo:string;
    //     puedePelear:boolean;
    //     peleasGanadas:number;
    // }
    // class Avenger {
    //     nombre:string;
    //     poder:string;
    //     equipo:string;
    //     puedePelear?:boolean;
    //     peleasGanadas?:number;
    //     constructor(nombre:string, poder:string, equipo:string){
    //         this.nombre = nombre;
    //         this.poder = poder;
    //         this.equipo = equipo;
    //     }
    // }
    class Avenger {
        constructor(nombre, poder, equipo, puedePelear = true, peleasGanadas) {
            this.nombre = nombre;
            this.poder = poder;
            this.equipo = equipo;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const ironMan = new Avenger("IronMan", "Inteligente", "IronMan", false);
    console.log(ironMan);
})();
