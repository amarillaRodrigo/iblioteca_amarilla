var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Usuario_prestados;
import { Material } from "./Material.js";
export class Usuario {
    constructor(id, nombre) {
        _Usuario_prestados.set(this, []);
        this.id = id;
        this.nombre = nombre;
    }
    prestar(material) {
        if (!material.disponible) {
            console.log(`El material ${material.titulo} no está disponible`);
            return;
        }
        material.disponible = false;
        __classPrivateFieldGet(this, _Usuario_prestados, "f").push(material);
        this.ultimaPrestacion = material;
        console.log(`El material ${material.titulo} se ha prestado a ${this.nombre}`);
    }
    mostrarPrestados() {
        if (__classPrivateFieldGet(this, _Usuario_prestados, "f").length === 0) {
            console.log(`${this.nombre} no tiene materiales prestados.`);
            return;
        }
        console.log(`Materiales prestados por ${this.nombre}:`);
        for (const material of __classPrivateFieldGet(this, _Usuario_prestados, "f")) {
            material.mostrarInfo();
        }
        ;
    }
    mostrarUltimaPrestacion() {
        if (!this.ultimaPrestacion) {
            console.log(`${this.nombre} aun no realizo prestamos`);
            return;
        }
        console.log(`Ultima prestacion de ${this.nombre}:`);
        this.ultimaPrestacion.mostrarInfo();
    }
}
_Usuario_prestados = new WeakMap();
//# sourceMappingURL=Usuario.js.map