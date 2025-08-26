# iblioteca_amarilla

1. Extends: la nueva clase es hija de otra, hereda todas las propiedades y metodos de la clase padre.
Mientras que implement define un contrato que la clase debe cumplir obligatoriamente.

2. 


3. Que algo sea abstracto significa que no ha sido implementado, en una clase significa que no se puede instanciar directamente. Pero si es posible crear una subclase que herede de la clase abstracta y que implemente todos sus metodos abstractos.


4. Getters y setters, no permiten acceder directamente a las propiedades, sino a traves de metodos.
Ademas se pueden validar los valores que se asignan a las propiedades.

5. Funcion con parametros obligatorios y opcionales

```ts
function saludar(nombre: string, edad?: number): void {
  console.log(`Hola ${nombre}` + (edad ? `, tenés ${edad} años` : ""));
}

saludar("Rodri");
saludar("Rodri", 24);

```

Funcion que devuelve una Promise

```ts
function obtenerDatos(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Datos del id ${id}`);
    }, 1000);
  });
}

obtenerDatos(1).then(console.log);

```