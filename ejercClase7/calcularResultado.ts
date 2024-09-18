import * as rdl from 'readline-sync';

let num1 = rdl.questionInt("Ingrese el primer numero: ")
let num2 = rdl.questionInt("Ingrese el segundo numero: ")
let opcion = rdl.questionInt("Ingrese el numero de opcion\nIngrese 1 para sumar\nIngrese 2 para restar\nIngrese 3 para multiplicar\nIngrese 4 para dividir\n ");
let total:number = 0;

function calculador(num1:number,num2:number,opcion:number) :number{
  let resultado:number;
  switch (opcion) {
    case 1:
      resultado=num1+num2;
      break;
    case 2:
      resultado=num1-num2;
      break;
    case 3:
      resultado=num1*num2;
      break;
    case 4:
      resultado=num1/num2;
      break;
    default:
      console.log("Debe ingresar una opcion valida");
      resultado=0;
      break;
  }
  return resultado;
}

total = calculador(num1,num2,opcion);
console.log(total);
