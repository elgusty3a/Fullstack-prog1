import * as rdl from 'readline-sync';
const longArreglos:number = rdl.questionInt("Ingrese el tamaño del arreglo: \n")
let arreglo:number[] = new Array(longArreglos);
let arregloInvertido:number[] = new Array(longArreglos);

arreglo = pedirValores();
imprimirArreglo(arreglo);
arregloInvertido = invertirArreglo(arreglo);
imprimirArreglo(arregloInvertido);


function pedirValores():number[] {
  let arr:number[] = new Array(longArreglos);
  for (let i = 0; i < longArreglos; i++) {
    let valor:number = rdl.questionInt(`Ingrese el valor de la posicion ${i} del arreglo: \n`);
    arr[i] = valor;
  }
  return arr;
}

function imprimirArreglo(arr:number[]) {
  let salida:string = "";
  for (let i = 0; i < longArreglos; i++) {
    salida = `${salida} | ${arr[i]}`;
  }
  console.log(`${salida} |`);
}

function invertirArreglo(arreglo: number[]): number[] {
  let arregloAuxiliar:number[] = new Array(longArreglos);
  for (let i = 0; i < longArreglos; i++) {
    arregloAuxiliar[i] = arreglo[(longArreglos-1)-i];
  }
  return arregloAuxiliar
}
