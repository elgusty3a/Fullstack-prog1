import * as rdl from 'readline-sync';

let dividendo:number = rdl.questionInt("Ingrese el dividendo:\n");
// let divisor:number = rdl.questionInt("Ingrese el divisor:\n"); //para usar la funcion esMultiplo

function esMultiplo(dividendo:number,divisor:number):boolean{
  let esMultiplo:boolean = false;
  if(dividendo%divisor==0){
    esMultiplo = true;
  }
  return esMultiplo;
}
function cantMultiplos(dividendo:number) :number{
  let cantidad:number = 0;
  for (let i = 1; i <= dividendo; i++){
    if(esMultiplo(dividendo,i)){
      console.log(`${i} es multiplo de ${dividendo}\n`);
      cantidad++;
    }
  }
  return cantidad;
}

// let resultado:boolean = esMultiplo(dividendo,divisor); //para usar la funcion esMultiplo
let resultado:number = cantMultiplos(dividendo);

console.log(resultado);