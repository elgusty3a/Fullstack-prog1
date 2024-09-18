import * as rdl from "readline-sync";

let nroBase:number = rdl.questionInt("Ingrese el numero base al cual calcular su potencia: ");
let potencia:number = rdl.questionInt("Ingrese el numero de potencia: ");

function calculaPotencia(nroBase:number,potencia:number):number {
  let resultado:number = 0;
  if (potencia>=0) {
    if (potencia==0) {
      resultado = 1;
    }else{
      resultado = nroBase;
      for (let i = 0; i < potencia-1; i++) {
        resultado = resultado*nroBase;
      }
    }
  }else{
    console.log("La potencia ingresada no es valida, debe ser mayor o igual a cero");
  }
  return resultado;
}

let total:number = calculaPotencia(nroBase,potencia);
console.log(total);