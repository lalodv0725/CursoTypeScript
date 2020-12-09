"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Fuerza'
    };
    var clave = avenger.clave, nombre = avenger.nombre;
    // console.log(avenger.nombre);
    // console.log(avenger.clave);
    // console.log(avenger.poder);
    console.log(clave);
    console.log(nombre);
    //const extraerDatos = (avenger:any) => {
    var extraerDatos = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log("======== USANDO FUNCION extraerDatos ========");
        console.log(nombre);
        console.log(poder);
        console.log("==============================================");
    };
    extraerDatos(avenger);
    var avengers = ["Thor", "IronMan", "SpiderMan"];
    var dios = avengers[0], hombre = avengers[1], arana = avengers[2];
    // console.log(avengers[0]);
    // console.log(avengers[1]);
    // console.log(avengers[2]);
    console.log(dios);
    console.log(hombre);
    console.log(arana);
    //const extraerDatosArreglo = (avengers:string[]) => {
    var extraerDatosArreglo = function (_a) {
        var spiderman = _a[2];
        console.log("===== USANDO FUNCION extraerDatosArreglo =====");
        console.log(spiderman);
        console.log("==============================================");
    };
    extraerDatosArreglo(avengers);
})();
