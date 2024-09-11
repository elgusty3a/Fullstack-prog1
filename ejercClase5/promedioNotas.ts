import * as fs from 'readline-sync'

// let nota1 : number = fs.questionInt("Ingrese la nota 1: ");
// let nota2 : number = fs.questionInt("Ingrese la nota 2: ");
// let nota3 : number = fs.questionInt("Ingrese la nota 3: ");
// let nota4 : number = fs.questionInt("Ingrese la nota 4: ");
// let nota5 : number = fs.questionInt("Ingrese la nota 5: ")

// let sumaNota : number = nota1 +nota2+nota3+nota4+nota5;

// let promedio: number = sumaNota / 5;

// usando while 
let nota: number;
let promedio: number;
let contador:number = 1;
let sumaNota: number = 0;

while (contador <= 10){
     nota = fs.questionInt("Ingrese su nota: ");
     sumaNota = sumaNota + nota;

     contador= contador + 1;
}

promedio = sumaNota/(contador-1);

console.log("Su nota promedio es: " + promedio);



