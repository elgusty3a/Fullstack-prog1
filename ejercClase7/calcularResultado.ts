import * as rdl from 'readline-sync';

let num1 = rdl.questionInt("Ingrese el primer numero: ")
let num2 = rdl.questionInt("Ingrese el segundo numero: ")
let opcion = rdl.questionInt("Ingrese el numero de opcion\nIngrese 1 para sumar\nIngrese 2 para restar\nIngrese 3 para multiplicar\nIngrese 4 para dividir\n ");
let total:number|null;

function calculador(num1:number,num2:number,opcion:number) :number|null{
  let resultado:number|null;
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
      if (num2!=0) {
        resultado=num1/num2;
      }else{
        console.log("Nose puede dividir por cero");
        resultado = null;
      }
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
