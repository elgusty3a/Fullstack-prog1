import * as rdl from 'readline-sync';
const longArreglos:number = rdl.questionInt("Ingrese el tamaño del arreglo: \n")
let arreglo:number[] = new Array(longArreglos);

arreglo = pedirValores();
imprimirArreglo(arreglo);
console.log(`En el arreglo hay ${negativos(arreglo)} numeros negativos, ${positivos(arreglo)} positivos y ${ceros(arreglo)} ceros`);


function negativos(arr:number[]):number {
  let cant:number = 0;
  for (let i = 0; i < longArreglos; i++) {
    if (arr[i]<0) {
      cant++;
    }
  }
  return cant;
}
function positivos(arr:number[]):number {
  let cant:number = 0;
  for (let i = 0; i < longArreglos; i++) {
    if (arr[i]>0) {
      cant++;
    }
  }
  return cant;
}
function ceros(arr:number[]):number {
  let cant:number = 0;
  for (let i = 0; i < longArreglos; i++) {
    if (arr[i]==0) {
      cant++;
    }
  }
  return cant;
}

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