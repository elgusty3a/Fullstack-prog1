/**
 * ### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.
 */

/**
 * * --------------NOTA-----------------
 * ! COMANDO PARA IMPLEMENTAR EL ARCHIVO (copiar y pegar en consola)
 *
 * ? ts-node entregasObligatorias/concursoTortas
 *
 */

import * as rdl from 'readline-sync';

let cantParticipantes:number = rdl.questionInt("Ingrese la cantidad de participantes del concurso: ");
let puntajeParticipanteGanador:number=0;
let participanteGanador:number=0;
for (let i = 1; i <= cantParticipantes;  i++) {
  let sabor:number = rdl.questionInt("Ingrese el puntaje de sabor: ");
  let presentacion:number = rdl.questionInt("Ingrese el puntaje de presentacion: ");
  let dificultad:number = rdl.questionInt("Ingrese el puntaje de dificultad: ");
  let puntajeParticipanteActual:number = calcularPuntaje(sabor,presentacion,dificultad);
  if (determinarGanador(puntajeParticipanteGanador,puntajeParticipanteActual)) {
    puntajeParticipanteGanador = puntajeParticipanteActual;
    participanteGanador = i;
  }
}
console.log(`----------------------------------\nLa torta ganadora es la del participante numero ${participanteGanador} con ${puntajeParticipanteGanador} puntos`);

function calcularPuntaje(sabor:number, presentacion:number, dificultad:number):number{
  let puntaje:number = sabor+presentacion+dificultad;
  return puntaje;
}

function determinarGanador(pAnterior:number,pActual:number) :boolean{
  let enMayor:boolean = false
  if (pActual>pAnterior) {
    enMayor = true;
  }
  return enMayor;
}