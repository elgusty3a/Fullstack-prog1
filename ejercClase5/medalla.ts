import * as fs from 'readline-sync'
// Switch
let posicionDeLLegada: number = fs.questionInt("Ingrese su posicion de llegada: ");

switch (posicionDeLLegada) {
    case 1:
        console.log("Entrega medalla de Oro");
        break;
    case 2:
        console.log("Entrega medalla de plata");
        break;
    case 3:
        console.log("Entrega medalla de bronce");
        break;
    default:
        console.log("Se entrega certificado de mencion");
        break;
}


///-----------------------------------------------------------------
