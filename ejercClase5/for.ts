import * as fs from 'readline-sync'
let nota: number;
let promedio: number;
let contador:number;
let sumaNota: number = 0;

for (contador = 1 ; contador <= 10; contador++) {
   nota = fs.questionInt("Ingrese su nota: ");
   sumaNota = sumaNota + nota;
}

promedio = sumaNota/(contador-1);

console.log("su nota promedio es: " + promedio);


