(() => {

    const sumar = (a:number,b:number): number => a+b;

    const nombre = ():string => "Lalo";

    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve,reject) =>{
            resolve("Lalo");
        });
    }

    obtenerSalario().then( (exito) => console.log(exito.toUpperCase));
    
})();