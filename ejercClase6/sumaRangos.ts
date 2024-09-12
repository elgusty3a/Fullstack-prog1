import * as rdl from 'readline-sync';
let nro1:number = rdl.questionInt("Ingrese el numero inicial del rango: ");
let nro2:number = rdl.questionInt("Ingrese el numero final del rango: ");
let suma:number = 0;
for (let i = nro1; i <= nro2; i++){
  // console.log(suma+"+"+i);
  suma += i;
  // console.log("Igual: "+suma);
}
console.log("Total: "+suma);