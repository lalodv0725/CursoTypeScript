(function(){

    function activar(quien:string, momento?:string, objeto:string = "batiseñal"){

        if (momento) {
            console.log(`${quien} encendio el/la ${objeto} ${momento}`);
        }else{
            console.log(`${quien} encendio el/la ${objeto}`);
        }
        
    }

    activar("Gordon","noche");

})();