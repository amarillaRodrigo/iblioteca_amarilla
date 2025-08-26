import type { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";
export declare abstract class Material implements IBibliotecaItem {
    readonly id: number;
    titulo: string;
    autor: string;
    private _disponible;
    constructor(id: number, titulo: string, autor: string);
    get disponible(): boolean;
    set disponible(valor: boolean);
    abstract mostrarInfo(): void;
}
//# sourceMappingURL=Material.d.ts.map