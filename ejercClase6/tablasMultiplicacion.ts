import * as rdl from 'readline-sync';
let nro1:number = rdl.questionInt("Ingrese el numero al que desee saber su tabla de multiplicar: ");
let nro2:number = rdl.questionInt("Ingrese el numero limite por el cual multiplicar: ");
let resultado:number = 0;
for (let i = 1; i <= nro2; i++){
  resultado = nro1 * i;
  console.log(nro1+" x "+i+" = "+resultado);
}
