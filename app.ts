(() => {

    class Avenger {

        nombre:string = "Sin Nombre";
        poder:string;
        edad:number;

        puedePelear:boolean;
        peleasGanadas:number;

    }

    const ironMan:Avenger = new Avenger();

    console.log(ironMan);
    
})();