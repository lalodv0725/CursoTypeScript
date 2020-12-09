"use strict";
(function () {
    function getEdad() {
        return 10 + 10;
    }
    var nombre = "Lalo";
    var apellido = "Auditore";
    var edad = 26;
    //const salida = nombre+apellido+edad;
    //const salida = nombre + " " + apellido + " (Edad: " + edad + ")";
    var salida = "\n   " + nombre + " " + apellido + " \n(Edad: " + (edad + 10) + ") Usando String Template";
    var salidaConFuncion = nombre + " " + apellido + " (Edad: " + getEdad() + ") Usando String Template y llamado de funcion";
    console.log(salida); //Salida Esperada: Lalo Auditore (Edad: 26)
    console.log(salidaConFuncion);
})();
