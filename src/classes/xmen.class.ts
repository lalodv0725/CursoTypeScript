const imprimirConstructor = (constructorClase:Function) => {
    console.log(constructorClase);
}

@imprimirConstructor
export class Xmen {
    constructor(public nombre:string,
                public poder:string){

    }

    imprimir (){
        console.log(`Nombre: ${this.nombre} - Poder: ${this.poder}`);
    }
}