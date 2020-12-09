(() => {

    console.log("------- Inicio PROGRAMA -------");
    //Promesas
    const retirarDinero = (montoRetirar:number):Promise<number> =>{

        console.log("Ejecutando retiro de dinero")

        let dineroDisponible: number = 1500;

        return new Promise ((resolve,reject)=>{

            setTimeout(() => {
                if (montoRetirar > dineroDisponible) {
                    reject("Dinero insuficiente");
                } else {
                    dineroDisponible = dineroDisponible - montoRetirar;
                    resolve(dineroDisponible);
                }
            }, 3000);

        });
    }

    retirarDinero(7000)
        .then((dinero:number)=> {
            console.log(`Dinero disponible despues de la operacion: ${dinero}`);
        })
        .catch((mensajeError) => {
            console.warn(mensajeError);
        })

    console.log("------- Fin PROGRAMA -------");

})();