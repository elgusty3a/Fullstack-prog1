import * as rdl from 'readline-sync';
let frase: string = rdl.question("Ingrese una frase para convertir en camelCase: \n");
let longitudFrase:number = frase.length;
let separador:string = " ";

function conversorCamelCase(frase:string,separador:string):string{
  let indice:number = 0;
  let fraseCamelCase:string = frase.trim();
  while (isTextInPara(fraseCamelCase,separador)&& (indice < longitudFrase)) {
    indice = indexStartTerm(fraseCamelCase,separador);
    alternarLetra(fraseCamelCase[indice+1]);
    let fraseAuxiliar:string = fraseCamelCase.slice(indice+1,0);
    
  }
  return frase;
}

function isTextInPara(fullText: string, searchTerm: string): boolean {
  return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

function indexStartTerm(str:string, re:string):number {
  var indice:number;
  if (str.search(re) != -1) {
    indice = str.search(re);
  } else {
    indice = -1;
  }
  return indice;
}

function alternarLetra(letra: string): string {
  if (letra == letra.toLowerCase()) {
      return letra.toUpperCase();
  } else {
      return letra.toLowerCase();
  }
}