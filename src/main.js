import { Libro } from "./models/Libro.js";
import { Revista } from "./models/Revista.js";
import { Usuario } from "./models/Usuario.js";
const libro1 = new Libro(1, "Clean Code", "Robert C. Martin", 464, "Ingeniería");
const libro2 = new Libro(2, "El señor de los anillos", "J.R.R. Tolkien", 256, "Fantasía");
const revista1 = new Revista(2, "National Geographic", "Varios", 202);
const usuario1 = new Usuario(100, "Rodrigo");
usuario1.prestar(libro1);
usuario1.prestar(revista1);
usuario1.prestar(libro1);
usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();
//# sourceMappingURL=main.js.map