import * as rdl from 'readline-sync'
let paragraph:string = rdl.question("\nIngrese el texto donde desea realizar la busqueda: ");
let searchTerm:string = rdl.question("\nIngrese la palabra que desea buscar en el texto: ");

//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
  return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
  let cadena:string = fullText;
  let count:number = 0;
  let longTermSearch:number=searchTerm.length;
  while (isTextInPara(cadena,searchTerm) && (cadena.length > longTermSearch)) { //omprobamos que la palabra este en el texto y ademas que el texto donde se busque sea de mayor longitud que el texto a buscar
    count ++;
    let indice:number = indexStartTerm(cadena,searchTerm);
    cadena = cadena.slice((indice+longTermSearch), cadena.length); //vamos cortando la palabra buscada del texto y generando un texto nuevo para seguir buscando
  }
  return count;
}
//busca el indice del string donde comienza la palabra buscada
function indexStartTerm(str:string, re:string):number {
  var indice:number;
  if (str.search(re) != -1) {
    indice = str.search(re);
  } else {
    indice = -1;
  }
  return indice;
}

console.log(`El termino ${searchTerm} aparece ${howManyTextInPara(paragraph,searchTerm)} veces en el texto`);



// const paragraph: string =
//   "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";
