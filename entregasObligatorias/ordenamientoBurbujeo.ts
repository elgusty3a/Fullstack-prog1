
const maxNum:number=100;
let longitud:number=10;
let arr:number[] = new Array(longitud);
cargarArregloAleatorio(arr,longitud);
imprimirArreglo(arr);
burbujeo(arr,longitud);
imprimirArreglo(arr);

function burbujeo(arr:number[],longitud:number) {
  let i,j:number;
  for (let i = 2; i < longitud; i++) {
    for (let j = 0; j < (longitud-1); j++) {
      if (comparar(arr,j,j+1)==1) {
        intercambiar(arr,j,j+1);
      }
    }
  }
}

function comparar(arr:number[],i:number,j:number) {
  let comp:number;
  if (arr[i]===arr[j]) {
    comp = 0;
  }else if(arr[i]<arr[j]){
    comp = -1;
  } else { comp = 1}
  return comp;
}

function intercambiar(arr:number[],i:number,j:number) {
  let aux:number;
  aux=arr[i];
  arr[i]=arr[j];
  arr[j]=aux;
}

function imprimirArreglo(arr:number[]) {
  let salida:string = "";
  for (let i = 0; i < arr.length; i++) {
    salida = `${salida} | ${arr[i]}`;
  }
  console.log(`${salida} |`);
}

function cargarArregloAleatorio(arr:number[],long:number) {
  for (let i = 0; i < long; i++) {
    nrosAleatorios[i] = generarNroAleatorio();
  }
}

function generarNroAleatorio():number{
  let resultado:number = Math.random()*maxNum+1;
  return Math.floor(resultado);
}