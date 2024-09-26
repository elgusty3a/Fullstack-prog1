let arreglo:number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
let mayor:number = 0;
let posMayor:number = 0;

for (let i = 0; i < arreglo.length; i++) {
  if (mayor < arreglo[i]) {
    mayor = arreglo[i];
    posMayor = i;
  }
}
function esPar(mayor:number):string {
  let condicion:string ="impar";
  if (mayor%2==0) {
    condicion = "par";
  }
  return condicion;
}
console.log(`El numero mayor es ${mayor} y esta en la posicion ${posMayor+1}`);
console.log(`El numero ${mayor} es ${esPar(mayor)}`);
