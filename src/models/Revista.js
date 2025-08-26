import { Material } from "./Material.js";
export class Revista extends Material {
    constructor(id, titulo, autor, edicion) {
        super(id, titulo, autor);
        this.edicion = edicion;
    }
    mostrarInfo() {
        const estado = this.disponible ? "Disponible" : "Prestada";
        console.log(`[REVISTA] #${this.id} — "${this.titulo}" de ${this.autor} — Edición ${this.edicion} — ${estado}`);
    }
}
//# sourceMappingURL=Revista.js.map