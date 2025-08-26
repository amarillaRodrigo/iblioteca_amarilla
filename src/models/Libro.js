import { Material } from "./Material.js";
export class Libro extends Material {
    constructor(id, titulo, autor, paginas, genero) {
        super(id, titulo, autor);
        this.paginas = paginas;
        this.genero = genero;
    }
    mostrarInfo() {
        const estado = this.disponible ? "Disponible" : "Prestado";
        console.log(`[LIBRO] #${this.id} — "${this.titulo}" de ${this.autor} — ${this.paginas} págs` +
            (this.genero ? ` — Género: ${this.genero}` : "") +
            ` — ${estado}`);
    }
}
//# sourceMappingURL=Libro.js.map