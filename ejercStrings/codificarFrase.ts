import * as rdl from 'readline-sync';
let frase: string = rdl.question("Ingrese una frase para codificar: \n");
let caractMates: string = "0123456789+-*/";
let vocales: string = "aeiou";
let codifVocales: string = ".,;:!";

codificarFrase(frase);

function codificarFrase(frase:string) {
  let fraseCodificada:string = "";
  for (let i = 0; i < frase.length; i++) {
    if (caractMates.indexOf(frase[i]) >= 0) {
      fraseCodificada += frase[i]
    } else if (vocales.indexOf((frase[i]).toLowerCase()) >= 0) {
      fraseCodificada += codifVocales[vocales.indexOf((frase[i]).toLowerCase())];
    } else {
      fraseCodificada += alternarConsonantes(frase[i]);
    }
  }
  console.log(fraseCodificada);
}

function alternarConsonantes(consonante: string): string {
  if (consonante == consonante.toLowerCase()) {
      return consonante.toUpperCase();
  } else {
      return consonante.toLowerCase();
  }
}