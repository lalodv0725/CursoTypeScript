(function(){

    function getEdad(){
        return 10+10;
    }

   const nombre = "Lalo";
   const apellido = "Auditore";
   const edad = 26;


   //const salida = nombre+apellido+edad;
   //const salida = nombre + " " + apellido + " (Edad: " + edad + ")";
   const salida = `
   ${nombre} ${apellido} \n(Edad: ${edad +10}) Usando String Template`;

   const salidaConFuncion = `${nombre} ${apellido} (Edad: ${getEdad()}) Usando String Template y llamado de funcion`;

   console.log(salida); //Salida Esperada: Lalo Auditore (Edad: 26)
   console.log(salidaConFuncion);
})();