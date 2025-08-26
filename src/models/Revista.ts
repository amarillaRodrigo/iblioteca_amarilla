import { Material } from "./Material.js";

export class Revista extends Material {
  private edicion: number;

  constructor(id: number, titulo: string, autor: string, edicion: number) {
    super(id, titulo, autor);
    this.edicion = edicion;
  }

  public mostrarInfo(): void {
    const estado = this.disponible ? "Disponible" : "Prestada";
    console.log(
      `[REVISTA] #${this.id} — "${this.titulo}" de ${this.autor} — Edición ${this.edicion} — ${estado}`
    );
  }
}
