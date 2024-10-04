import * as rdl from 'readline-sync';

let longArreglos:number = rdl.questionInt("Ingreese la longitud de los arreglos: \n");
let arreglo1:number[] = new Array(longArreglos);
console.log("Le pediremos los valores para el arreglo numero 1: \n");
pedirValores(arreglo1,longArreglos);
let arreglo2:number[] = new Array(longArreglos);
console.log("Le pediremos los valores para el arreglo numero 2: \n");
pedirValores(arreglo2,longArreglos);
let arreglo3:number[] = new Array(longArreglos);
console.log("Le pediremos los valores para el arreglo numero 3: \n");
pedirValores(arreglo3,longArreglos);
let arreglo4:number[] = new Array(longArreglos);
console.log("Le pediremos los valores para el arreglo numero 4: \n");
pedirValores(arreglo4,longArreglos);
let resultado:number[] = new Array(longArreglos);

multiplicarArreglos(arreglo1,arreglo2,resultado);
multiplicarArreglos(resultado,arreglo3,resultado);
multiplicarArreglos(resultado,arreglo4,resultado);
imprimirArreglo(arreglo1);
imprimirArreglo(arreglo2);
imprimirArreglo(arreglo3);
imprimirArreglo(arreglo4);
imprimirArreglo(resultado);

function multiplicarArreglos(arr1:number[],arr2:number[],res:number[]) {
  for (let i = 0; i < longArreglos; i++) {
    res[i] = (arr1[i] * arr2[i]);
  }
}

function pedirValores(arr:number[],N:number){
  for (let i = 0; i < N; i++) {
    let valor:number = rdl.questionInt(`Ingrese el valor de la posicion ${i} del arreglo: \n`);
    arr[i] = valor;
  }
}

function imprimirArreglo(arr:number[]) {
  let salida:string = "";
  for (let i = 0; i < longArreglos; i++) {
    salida = `${salida} | ${arr[i]}`;
  }
  console.log(`${salida} |`);
}