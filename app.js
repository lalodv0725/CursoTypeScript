"use strict";
(function () {
    function activar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = "batiseñal"; }
        if (momento) {
            console.log(quien + " encendio el/la " + objeto + " " + momento);
        }
        else {
            console.log(quien + " encendio el/la " + objeto);
        }
    }
    activar("Gordon", "noche");
})();
