"use strict";
(() => {
    //Introduccion a interfaces
    const enviarAMision = (xmen) => {
        console.log(`Xmen ${xmen.nombre} enviado a mision`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Xmen ${xmen.nombre} regreso al cuartel`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarAMision(wolverine);
    regresarAlCuartel(wolverine);
})();
