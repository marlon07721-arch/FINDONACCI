
// La serie Fibonacci siempre empieza con 0 y 1.
// Después de eso, cada número nuevo es la suma de los dos anteriores.
// Ejemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// Cantidad de números que queremos mostrar
let cantidadDeNumeros = 20;

// Los dos primeros números de la serie
let numeroAnterior = 0;
let numeroActual = 1;

// Aquí voy a guardar todos los números para mostrarlos al final
let listaFibonacci = [];

// Agrego los dos primeros números a la lista
listaFibonacci.push(numeroAnterior);
listaFibonacci.push(numeroActual);

// Uso un contador para saber cuántos números llevo.
// Empiezo en 2 porque ya agregué el 0 y el 1.
let contador = 2;

// Mientras no tenga los 20 números, sigo calculando
while (contador < cantidadDeNumeros) {
  // El siguiente número es la suma de los dos anteriores
  let siguienteNumero = numeroAnterior + numeroActual;

  // Lo guardo en la lista
  listaFibonacci.push(siguienteNumero);

  // Ahora muevo los valores para la próxima vuelta:
  // el actual pasa a ser el anterior, y el nuevo pasa a ser el actual
  numeroAnterior = numeroActual;
  numeroActual = siguienteNumero;

  // Aumento el contador
  contador = contador + 1;
}

// Muestro el resultado en consola
console.log("Los " + cantidadDeNumeros + " primeros números de la serie Fibonacci son:");
console.log("");

// Los imprimo uno por uno con su posición
for (let i = 0; i < listaFibonacci.length; i++) {
  console.log("Posición " + (i + 1) + ": " + listaFibonacci[i]);
}

console.log("");
console.log("Serie completa: " + listaFibonacci.join(", "));
