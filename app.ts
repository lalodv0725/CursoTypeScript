(() => {

    const avenger = {
        nombre:'Steve',
        clave:'Capitan America',
        poder: 'Fuerza'
    }

    const { clave, nombre } = avenger;

    // console.log(avenger.nombre);
    // console.log(avenger.clave);
    // console.log(avenger.poder);
    console.log(clave)
    console.log(nombre);

    //const extraerDatos = (avenger:any) => {
    const extraerDatos = ({nombre,poder}:any) => {
        console.log("======== USANDO FUNCION extraerDatos ========")
        console.log(nombre)
        console.log(poder);

        console.log("==============================================");
    }

    extraerDatos(avenger);

    const avengers: string [] = ["Thor", "IronMan", "SpiderMan"];

    const [dios, hombre, arana] = avengers;

    // console.log(avengers[0]);
    // console.log(avengers[1]);
    // console.log(avengers[2]);
    console.log(dios);
    console.log(hombre);
    console.log(arana);


    //const extraerDatosArreglo = (avengers:string[]) => {
    const extraerDatosArreglo = ([,,spiderman]:string []) => {
        console.log("===== USANDO FUNCION extraerDatosArreglo =====");
        console.log(spiderman);
        console.log("==============================================");
    }

    extraerDatosArreglo(avengers);

})();