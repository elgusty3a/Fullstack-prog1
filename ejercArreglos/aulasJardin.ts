import * as rdl from 'readline-sync';
let cantAlumnos:number = rdl.questionInt("Ingrese la cantidad de alumnos: \n")
let capacidadAulas:number[] = [30,35,40];
let aulas:string[] = ["Amarilla","Verde","Azul"];
principal(cantAlumnos);

function principal(cantAlumnos:number) {
  let indice:number = 0;
  while (cantAlumnos > capacidadAulas[indice]) {
    indice++;
  }
  if (indice >= aulas.length) {
    console.log(`No hay aula que pueda alojar ${cantAlumnos} alumnos`);
  }else{
    console.log(`El aula correspondiente para ${cantAlumnos} alumnos es la ${aulas[indice]}`);
  }
}