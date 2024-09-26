import * as rdl from 'readline-sync';

let arreglo:string[] = new Array(5);
arreglo[0] = "Gustavo";
arreglo[1] = "Daniel";
arreglo[2] = "Maria";
arreglo[3] = "Isabel";
arreglo[4] = "Cintia";
let nombreBuscado:string = rdl.question("Ingrese el nombre que desea buscar: \n");
let existe:boolean = false;
let posicion:number = -1;
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
  if (comparador(nombreBuscado,arreglo[i])) {
    existe = true;
    posicion = i;
  }
}
if (existe) {
  console.log(`El nombre ${nombreBuscado} se encuentra en la posicion ${posicion}`);
}else{
  console.log(`El nombre ${nombreBuscado} no existe en el arreglo`);
}

function comparador(nombre1:string,nombre2:string):boolean {
  let existe:boolean = false;
  if (nombre1 === nombre2) {
    existe = true;
  }
  return existe;
}