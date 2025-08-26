# iblioteca_amarilla

1. Extends: la nueva clase es hija de otra, hereda todas las propiedades y metodos de la clase padre.
Mientras que implement define un contrato que la clase debe cumplir obligatoriamente.

2. 


3. Que algo sea abstracto significa que no ha sido implementado, en una clase significa que no se puede instanciar directamente. Pero si es posible crear una subclase que herede de la clase abstracta y que implemente todos sus metodos abstractos.


4. Getters y setters, no permiten acceder directamente a las propiedades, sino a traves de metodos.
Ademas se pueden validar los valores que se asignan a las propiedades.

5. Funcion con parametros obligatorios y opcionales

```ts
function calcularArea(base: number, altura?: number): number {
  if (altura) {
    return base * altura;
  }
  return base * base;
}

console.log(calcularArea(5));      
console.log(calcularArea(5, 10));  

```

Funcion que devuelve una Promise

```ts
function sumarAsync(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}

sumarAsync(3, 7).then(resultado => {
  console.log(`Resultado: ${resultado}`);
});


```