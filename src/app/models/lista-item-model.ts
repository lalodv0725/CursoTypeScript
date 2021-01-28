

export class ListaItem{
    descripcion:string;
    statusCompletado:boolean;

    constructor(desc:string){
        this.descripcion = desc;
        this.statusCompletado = false;
    }    
}