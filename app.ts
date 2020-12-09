(function(){

    const funcionNormal = function( cadena:string ){
        return cadena.toUpperCase();
    }

    const funcionFlecha = (cadena:string) => cadena.toUpperCase();

    const funcionSumarN = function(a:number, b:number){
        return a+b;
    }

    const funcionSumarF = (a:number, b:number) => a+b; 


    console.log(funcionNormal("normal"));
    console.log(funcionFlecha("flecha"));

    console.log(funcionSumarN(4,5));
    console.log(funcionSumarF(4,5));


    const hulk = {
        nombre: 'Hulk',
        smash(){
            setTimeout(() => {
                console.log(`${this.nombre} aplasta!!`);
            }, 2000);
            
        }
    }

    hulk.smash();

})();