import * as rdl from 'readline-sync';

let dimension:number = rdl.questionInt("Ingrese el tamaño del arreglo: \n");
let numeros:number[] = new Array(dimension);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] = rdl.questionInt(`Ingrese el nombre que quiere agregar en la posicion ${i}: `);
}
console.log(`El resultado de la suma de los numeros en el arreglo es: ${sumaArreglo(numeros)}`);

function sumaArreglo(arreglo:number[]):number {
  let suma:number = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}