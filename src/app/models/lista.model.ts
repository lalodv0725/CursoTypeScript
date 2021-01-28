import { ListaItem } from "./lista-item-model";

export class Lista {
    id:number;
    titulo:string;
    fechaCreacion: Date;
    fechaFinalizacion: Date;
    statusCompletado:boolean;
    items: ListaItem[];
    
    constructor (titulo:string){
        this.titulo = titulo;

        this.fechaCreacion = new Date();

        this.statusCompletado = false;

        this.items= [];

        this.id = new Date().getTime();
    }

}