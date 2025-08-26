import type { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";

export abstract class Material implements IBibliotecaItem {
    public readonly id: number;
    public titulo: string;
    public autor: string;
    
    private _disponible: boolean = true;

    constructor(id: number, titulo: string, autor: string) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
    }

    get disponible(): boolean {
        return this._disponible;
    }

    set disponible(valor: boolean){
        this._disponible = valor;
    }

    public abstract mostrarInfo(): void;
}