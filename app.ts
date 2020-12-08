(function(){

    let mensaje: string = "Hola";
    let numero: number = 9;
    let booleano: boolean = true; // false
    let hoy: Date = new Date ();

    let cualquierCosa: string | number;
    cualquierCosa = mensaje;
    cualquierCosa = numero;
    //cualquierCosa = booleano;
    //cualquierCosa = hoy;

    console.log("Variable cualquierCosa: "+cualquierCosa);

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    }

    spiderman = {
        nombre: 'Peter Parker',
        edad: 4
    }

    console.log("Objeto spiderman: "+spiderman);

})();