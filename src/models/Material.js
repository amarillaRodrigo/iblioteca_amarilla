export class Material {
    constructor(id, titulo, autor) {
        this._disponible = true;
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
    }
    get disponible() {
        return this._disponible;
    }
    set disponible(valor) {
        this._disponible = valor;
    }
}
//# sourceMappingURL=Material.js.map