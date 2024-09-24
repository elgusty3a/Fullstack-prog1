const dimension:number = 10;
let nrosAleatorios:number[] = new Array(dimension);
for (let i = 0; i < nrosAleatorios.length; i++) {
  nrosAleatorios[i] = generarNroAleatorio();
}

for (let i = 0; i < nrosAleatorios.length; i++) {
  console.log(`En la posicion ${i} se aloja el numero aleatorio ${nrosAleatorios[i]}`);
  
}

function generarNroAleatorio():number{
  let resultado:number = Math.random()*10+1;
  return Math.floor(resultado);
}