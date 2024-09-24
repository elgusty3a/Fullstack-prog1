import * as rdl from 'readline-sync';

const meses:string[] = new Array(12);
meses[0] = "Enero";
meses[1] = "Febrero";
meses[2] = "Marzo";
meses[3] = "Abril";
meses[4] = "Mayo";
meses[5] = "Junio";
meses[6] = "Julio";
meses[7] = "Agosto";
meses[8] = "Septiembre";
meses[9] = "Octubre";
meses[10] = "Noviembre";
meses[11] = "Diciembre";

let nroMes:number = rdl.questionInt("Ingrese el numero de mes: \n")
console.log(`El mes elegido es ${meses[nroMes-1]}`);