"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => "Lalo";
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve("Lalo");
        });
    };
    obtenerSalario().then((exito) => console.log(exito.toUpperCase));
})();
