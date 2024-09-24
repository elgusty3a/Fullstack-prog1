import * as rdl from 'readline-sync';

let nrosDeseados:number[] = new Array(5);
let nroIngresado:number;
for (let i = 0; i < nrosDeseados.length; i++) {
  nroIngresado = rdl.questionInt("Ingrese el numero deseado: ");
  nrosDeseados[i] = nroIngresado;
}
for (let i = 0; i < nrosDeseados.length; i++) {
  console.log(`El numero ingresado en la posicion ${i} es ${nrosDeseados[i]}`);
}
