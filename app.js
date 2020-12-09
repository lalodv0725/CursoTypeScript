"use strict";
(function () {
    var funcionNormal = function (cadena) {
        return cadena.toUpperCase();
    };
    var funcionFlecha = function (cadena) { return cadena.toUpperCase(); };
    var funcionSumarN = function (a, b) {
        return a + b;
    };
    var funcionSumarF = function (a, b) { return a + b; };
    console.log(funcionNormal("normal"));
    console.log(funcionFlecha("flecha"));
    console.log(funcionSumarN(4, 5));
    console.log(funcionSumarF(4, 5));
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " aplasta!!");
            }, 2000);
        }
    };
    hulk.smash();
})();
