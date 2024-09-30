import * as rdl from 'readline-sync';

let longArreglos:number = rdl.questionInt("Ingreese la longitud de los arreglos: \n");
let arreglo1:number[] = new Array(longArreglos);
console.log("Le pediremos los valores para el arreglo numero 1: \n");
arreglo1 = pedirValores(longArreglos);
let arreglo2:number[] = new Array(longArreglos);
console.log("Le pediremos los valores para el arreglo numero 2: \n");
arreglo2 = pedirValores(longArreglos);

console.log(`Arreglo 1:`);
imprimirArreglo(arreglo1);
console.log(`Arreglo 2:`);
imprimirArreglo(arreglo2);

console.log(`El producto escalar entre los vectores dados es: ${productoEscalar(arreglo1,arreglo2)}`);



function pedirValores(N:number):number[] {
  let arr:number[] = new Array(N);
  for (let i = 0; i < N; i++) {
    let valor:number = rdl.questionInt(`Ingrese el valor de la posicion ${i} del arreglo: \n`);
    arr[i] = valor;
  }
  return arr;
}

function productoEscalar(arr1:number[],arr2:number[]):number {
  let resultado:number = 0;
  for (let i = 0; i < longArreglos; i++) {
    resultado += (arr1[i] * arr2[i]);
  }
  return resultado;
}

function imprimirArreglo(arr:number[]) {
  let salida:string = "";
  for (let i = 0; i < longArreglos; i++) {
    salida = `${salida} | ${arr[i]}`;
  }
  console.log(`${salida} |`);
}