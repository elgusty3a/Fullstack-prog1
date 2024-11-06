// Personas en un Bar

// El gerente de una discoteca desea tener un registro del número de personas que ingresan al local. Para mantener un ambiente seguro y controlado, solo se permite la entrada a personas de entre 18 y 40 años. Actualmente, el total de personas en el local es de 270.

// El gerente necesita saber:

// * Cuántas personas menores de 21 años han ingresado.
// * Cuántas personas de 21 años o más han ingresado
// * El promedio de edad de las personas que ingresaron al local.

import * as rdl from 'readline-sync';
const asistentes:number[] = [];
const edadMinima:number  = rdl.questionInt("Ingrese la edad minima permitida\n");
const edadMaxima:number  = rdl.questionInt("Ingrese la edad máxima permitida\n");
const cantPersonas:number  = rdl.questionInt("Ingrese la cantidad de asistentes al local\n");
llenarAsistencia(cantPersonas,edadMinima,edadMaxima);
const opc:number = 1;
while (opc > 0) {
  const opc = rdl.questionInt("- Ingrese 1 si desea saber cuántas personas menores de X edad han ingresado\n- Ingrese 2 si desea saber cuántas personas mayores de X edad han ingresado\n- Ingrese 3 si desea saber el promedio de edad de las personas que ingresaron al local.\n Ingrese 0 para finalizar\n");
  if(opc==0){
    break;
  }else if(opc > 0 && opc<4) {
    menu(opc)
  }else{
    console.log("Opcion invalida");
  }
}

imprimirAsistencia(asistentes);


function menu(opc:number){
  switch (opc) {
    case 1:
      let minimo:number = rdl.questionInt("Ingrese la edad\n");
      let menores:number = menoresDe(asistentes,minimo);
      console.log(`La cantidad de personas menores de 21 años es: ${menores}`);
      break;
    case 2:
      let maximo: number = rdl.questionInt("Ingrese la edad\n")
      let mayores:number = mayoresDe(asistentes,maximo);
      console.log(`La cantidad de personas mayores de 21 años es: ${mayores}`);
      break;
    case 3:
      let promedio:number = promedioEdad(asistentes);
      console.log(`El promedio de edad de los asistentes es de: ${promedio}`);
      break;
  }
}

function llenarAsistencia(cantAsistentes:number, edadMin:number, edadMax:number) {
  for (let i = 0; i < cantAsistentes; i++) {
    asistentes.push(aleatorio(edadMin,edadMax))
  }
}

function aleatorio(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imprimirAsistencia(arr:number[]) {
  let salida:string = "";
  for (let i = 0; i < arr.length; i++) {
    salida = `${salida} | ${arr[i]}`;
  }
  console.log(`${salida} |`);
}

function menoresDe(arr:number[],edadMin:number):number{
  let cont:number = 0;
  arr.forEach(e => {
    if (e < edadMin){
      cont++;
    }
  });
  return cont;
}
function mayoresDe(arr:number[],edadMin:number):number{
  let cont:number = 0;
  arr.forEach(e => {
    if (e >= edadMin){
      cont++;
    }
  });
  return cont;
}
function promedioEdad(arr:number[]):number {
  let suma:number = 0;
  arr.forEach(e => {
    suma +=e;
  });
  return Math.floor(suma/cantPersonas);
}