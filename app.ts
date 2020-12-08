(function(){
    //Nombre tiene que ser de tipo String
    function saludar( nombre: string ) {
        console.table( 'Hola ' + nombre + ', Como estas?'); // Hola Logan
    }
    
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    
    saludar( wolverine.nombre );
    



})();