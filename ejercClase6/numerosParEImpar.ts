import * as rdl from 'readline-sync';
let nro:number = 0;
while (nro != -1) {
  nro = rdl.questionInt("Ingrese un numero mayor a 0 para saber si es par o impar\nIngrese -1 para finalizar");
  if (nro != -1 && nro != 0) {
    if (nro % 2 == 0) {
      console.log("Es par");
    }else{
      console.log("Es impar");
    }
  }
}
console.log("Fin del juego");