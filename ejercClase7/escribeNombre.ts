import * as rdl from 'readline-sync';

let nombre:string = rdl.question("Ingrese su nombre:\n");
let apellido:string = rdl.question("Ingrese su apellido:\n");

function concatenaString(nom:string,apell:string):string{
  let nomYApll:string = nom+" "+apell;
  return nomYApll;
}

console.log(concatenaString(nombre,apellido));