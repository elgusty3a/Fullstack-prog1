import * as rdl from 'readline-sync';
let cantAlumnos:number = rdl.questionInt("Ingrese la cantidad de alumnos: \n")
let nombreAlumnos:string[]=new Array(cantAlumnos);
let notaTrimestre1:number[]=new Array(cantAlumnos);
let notaTrimestre2:number[]=new Array(cantAlumnos);
let notaTrimestre3:number[]=new Array(cantAlumnos);
pedirValores(nombreAlumnos,notaTrimestre1,notaTrimestre2,notaTrimestre3,cantAlumnos);
principal();

function principal() {
  let opcion:number=1;
  while (opcion > 0) {
    opcion = rdl.questionInt("Ingrese 1 para buscar alumno\nIngrese 0 para salir\n");
    while (opcion < 0 || opcion > 1) {
      opcion = rdl.questionInt("OPCION INVALIDA\nIngrese 1 para buscar alumno\nIngrese 0 para salir\n");
    }
    if (opcion === 1) {
      let nombreABuscar:string = rdl.question("Que alumno desea buscar?\n")
      let indice:number = Buscar(nombreABuscar);
      if (indice >= 0) {
        imprimirAlumno(indice);
      }else{
        console.log("El alumno no existe\n");
      }
    }else{
      break;
    }
  }
}

function pedirValores(arrNombre:string[],arr1:number[],arr2:number[],arr3:number[],N:number){
  for (let i = 0; i < N; i++) {
    arrNombre[i] = rdl.question("Ingrese el nombre del alumno: \n")
    arr1[i] = rdl.questionInt(`Ingrese la nota para el primer trimestre del alumno ${arrNombre[i]}: \n`);
    arr2[i] = rdl.questionInt(`Ingrese la nota para el segundo trimestre del alumno ${arrNombre[i]}: \n`);
    arr3[i] = rdl.questionInt(`Ingrese la nota para el tercer trimestre del alumno ${arrNombre[i]}: \n`);
  }
}

function Buscar(nombre:string):number {
  let encontrado:boolean = false;
  let indice:number = 0;
  while (indice < cantAlumnos && !encontrado) {
    if (nombre.toLowerCase() == nombreAlumnos[indice].toLowerCase()) {
      encontrado = true;
      break;
    }
    indice++
  }
  if (!encontrado) {
    indice = -1;
  }
  return indice;
}

 function imprimirAlumno(i:number) {
  console.log(`La nota del primer trimestre es: ${notaTrimestre1[i]}`);
  console.log(`La nota del segundo trimestre es: ${notaTrimestre2[i]}`);
  console.log(`La nota del tercer trimestre es: ${notaTrimestre3[i]}`);
  console.log(`El promedio de ${nombreAlumnos[i]} en el año es: ${(notaTrimestre1[i]+notaTrimestre2[i]+notaTrimestre3[i])/3}`);
 }
