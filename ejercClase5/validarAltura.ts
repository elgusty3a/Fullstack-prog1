import * as fs from 'readline-sync';

// Desarrolle un algoritmo que, de acuerdo a la
// altura de una persona, decida si puede entrar
// a un juego en un parque de diversiones
// • Para poder subirse a la montaña rusa la
// persona debe medir 1.30 mts. o más

const ALTURA_MINIMA : number = 130;
let alturaPersona : number = fs.questionInt("Ingrese su altura en cm: ");

if(alturaPersona >= ALTURA_MINIMA ){
    console.log("Usted puede subir!");
}else {
    console.log("Usted debe medir 130 cm o mas para subir");
}
