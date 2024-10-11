/*Ejercicio: Convertir una palabra ingresada por el usuario en clave, según las reglas siguientes:
si el carácter es una vocal reemplazar aeiou por . , ; : !  respectivamente.
si el carácter es un número o un operador matemático (+ - * / ) queda igual.
si el carácter es una consonante minúscula pasar a mayúscula y viceversa.*/
import * as rs from "readline-sync";

// Pedir la palabra al usuario
let palabra: string = rs.question("Ingrese una clave: ");
let matematic: string = "0123456789+-*/";
let vocales: string = "aeiou";
let reemplazo: string = ".,;:!";

function convertirPalabra(clave: string, reemplazos: string, vocals: string, matematicos: string): string {
    // Reemplazo de vocales
    for (let i = 0; i < vocals.length; i++) {

        const regex = new RegExp(vocals[i], 'g'); // Expresión regular para buscar la vocal en toda la clave ingresada
        clave = clave.replace(regex, reemplazos[i]); // Reemplazamos todas las ocurrencias de esa vocal, por .,;:! sucesivamente
    }
    // Reemplazo de consonantes (pasar de minúsculas a mayúsculas y viceversa)
    clave = clave.replace(/[b-df-hj-np-tv-z]/gi, cambiarConsonantes);

    return clave;
}

// Función que cambia consonantes minúsculas a mayúsculas y viceversa
function cambiarConsonantes(letra: string): string {
    if (letra == letra.toLowerCase()) {
        return letra.toUpperCase();
    } else {
        return letra.toLowerCase();
    }
}

let claveEdit: string = convertirPalabra(palabra, reemplazo, vocales, matematic);
console.log(claveEdit);