import { Material } from "./Material.js";

export class Libro extends Material {
    private paginas: number;
    private genero?: string;

    constructor(
        id: number,
        titulo: string,
        autor: string,
        paginas: number,
        genero?: string
    ) {
        super(id, titulo, autor);
        this.paginas = paginas;
        this.genero  = genero;
    }

    public mostrarInfo(): void {
        const estado = this.disponible ? "Disponible" : "Prestado";
        console.log(
            `[LIBRO] #${this.id} — "${this.titulo}" de ${this.autor} — ${this.paginas} págs` +
              (this.genero ? ` — Género: ${this.genero}` : "") +
              ` — ${estado}`
          );
    
    }
}
