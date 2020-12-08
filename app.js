"use strict";
(function () {
    //Nombre tiene que ser de tipo String
    function saludar(nombre) {
        console.table('Hola ' + nombre + ', Como estas?'); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})();
