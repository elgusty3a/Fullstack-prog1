function contarParesEImpares(numeros:number[]):number[] {
  let pares:number = 0;
  let impares:number = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      pares + 1;
    } else {
      impares += 1;
    }
  }
  return [pares, impares];
}

let numeros:number[] = [1, 2, 3, 4, 5, 6];
let resultado:number[] = contarParesEImpares(numeros);
console.log("Pares: " + resultado[0] + ", Impares: " + resultado[1]);