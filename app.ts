(() => {

    //Introduccion a interfaces

    interface Xmen {
        nombre:string;
        edad: number;
        poder?:string;
    }

    const enviarAMision = (xmen: Xmen) =>{
        console.log(`Xmen ${xmen.nombre} enviado a mision`);
    }

    const regresarAlCuartel = (xmen:Xmen) =>{
        console.log(`Xmen ${xmen.nombre} regreso al cuartel`);
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarAMision(wolverine);
    regresarAlCuartel(wolverine);

})();