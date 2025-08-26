import type { IUsuario } from "../interfaces/IUsuario.js";
import { Material } from "./Material.js";

export class Usuario implements IUsuario {
    public readonly id: number;
    public nombre: string;
    
   #prestados: Material[] = []
   public ultimaPrestacion! : Material;

   constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
   }

   public prestar(material: Material): void {
    if (!material.disponible) {
        console.log(`El material ${material.titulo} no está disponible`);
        return;
    }

    material.disponible = false;
   this.#prestados.push(material);
   this.ultimaPrestacion = material;
   console.log(`El material ${material.titulo} se ha prestado a ${this.nombre}`);
   }

   public mostrarPrestados(): void {
    if(this.#prestados.length === 0) {
        console.log(`${this.nombre} no tiene materiales prestados.`);
        return;
    }

    console.log(`Materiales prestados por ${this.nombre}:`);
    for (const material of this.#prestados) {
        material.mostrarInfo();
    };
}

    public mostrarUltimaPrestacion(): void {
        if (!this.ultimaPrestacion) {
            console.log(`${this.nombre} aun no realizo prestamos`);
            return;
        }
        console.log(`Ultima prestacion de ${this.nombre}:`);
        this.ultimaPrestacion.mostrarInfo();
    }
}