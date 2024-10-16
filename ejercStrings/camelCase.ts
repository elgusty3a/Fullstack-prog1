import * as rdl from 'readline-sync';
let frase: string = rdl.question("Ingrese una frase para convertir en camelCase: \n");
frase = frase.trim();
let separador:string = " ";
let fraseVector:string[] = frase.split(separador); // separa la frase en trozos teniendo en cuenta un separador definido y guarda cada fragmento en un lugar de un arreglo
let longitudFraseVector:number = fraseVector.length;
console.log(conversorCamelCase(fraseVector,separador));

function conversorCamelCase(fraseVector:string[],separador:string):string{
  let fraseCamelCase:string = "";
  const primerPalabra:string = fraseVector[0].toLowerCase(); //cconvierte la pimer palabra n minusculas
  fraseCamelCase += primerPalabra;
  let palabra:string = "";
  for (let i = 1; i < longitudFraseVector; i++) {
    palabra = fraseVector[i].charAt(0).toUpperCase() + fraseVector[i].slice(1).toLowerCase(); //selecciona la primer ltra de la palabra i-esima y la pone el mayuculas y el resto en minusculas
    fraseCamelCase += palabra; //concatena las palabras n un solo string
  }
  return fraseCamelCase;
}
