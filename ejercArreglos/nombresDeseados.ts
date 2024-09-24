import * as rdl from 'readline-sync';

let dimension:number = rdl.questionInt("Ingrese el tamaño del arreglo: \n");
let nombres:string[] = new Array(dimension);
for (let i = 0; i < nombres.length; i++) {
  nombres[i] = rdl.question(`Ingrese el nombre que quiere agregar en la posicion ${i}: `);
}
for (let i = 0; i < nombres.length; i++) {
  console.log(`En la posicion ${i} se encuentra ${nombres[i]}`);
}