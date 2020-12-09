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

        constructor(public nombre:string,
            public poder:string,
            public equipo:string,
            public puedePelear:boolean = true,
            public peleasGanadas?:number){

        }
    }


    const ironMan: Avenger = new Avenger("IronMan","Inteligente","IronMan", false);

    console.log(ironMan);
    
})();