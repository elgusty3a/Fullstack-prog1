const long:number = 30;
let nrosRandom:number[] = new Array(long);
for (let i = 0; i < nrosRandom.length; i++) {
  nrosRandom[i] = generarNroRandom();
}
imprimirArreglo1(nrosRandom);
console.log("----------------------------------");
imprimirArreglo1(filtrarRepetidos());

function generarNroRandom():number{
  let resultado:number = Math.random()*15+1;
  return Math.floor(resultado);
}

function filtrarRepetidos():number[]{
  const arrSinRepetidos:number[] = [];
  // for (let i = 0; i < nrosRandom.length; i++) {
  //   if (!arrSinRepetidos.includes(nrosRandom[i])) {
  //     arrSinRepetidos.push(nrosRandom[i]);
  //   }
  // }
  nrosRandom.forEach(e => {
    if (!arrSinRepetidos.includes(e)) {
      arrSinRepetidos.push(e);
    }
  });
  return arrSinRepetidos;
}

function imprimirArreglo1(arr:number[]) {
  let salida:string = "";
  for (let i = 0; i < arr.length; i++) {
    salida = `${salida} | ${arr[i]}`;
  }
  console.log(`${salida} |`);
}