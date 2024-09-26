import * as rdl from 'readline-sync';

let longArreglos:number = rdl.questionInt("Ingreese la longitud de los arreglos: \n");
let resultado:number[]=new Array(longArreglos);
let arreglo1:number[] = new Array(longArreglos);
console.log("Le pediremos los valores para el arreglo numero 1: \n");
arreglo1 = pedirValores();
let arreglo2:number[] = new Array(longArreglos);
console.log("Le pediremos los valores para el arreglo numero 2: \n");
arreglo2 = pedirValores();

resultado = sumaArreglos(arreglo1,arreglo2);

imprimirArreglo(resultado);


function pedirValores():number[] {
  let arr:number[] = new Array(longArreglos);
  for (let i = 0; i < longArreglos; i++) {
    let valor:number = rdl.questionInt(`Ingrese el valor de la posicion ${i} del arreglo: \n`);
    arr[i] = valor;
  }
  return arr;
}

function sumaArreglos(arr1:number[],arr2:number[]):number[] {
  let resultado:number[]=new Array(longArreglos);
  for (let i = 0; i < longArreglos; i++) {
    resultado[i] = arr1[i] + arr2[i];
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
