import * as fs from 'readline-sync';

// • Desarrolle un algoritmo que diga el precio de
// una compra
// • La compra se compone del precio del producto
// y la cantidad
// • Si el cliente gasta más de $1000 debemos
// aplicarle un descuento del 10%

const DESCUENTO : number = 0.1;
const MINIMO_COMPRA : number = 1000;
let precio : number = fs.questionInt("Ingrese el precio del producto: ");
let cantidad : number = fs.questionInt("Ingrese la cantidad del producto: ");
let totalDeCompra : number = precio * cantidad;

if (totalDeCompra > MINIMO_COMPRA) {
    let totalConDescuento : number = totalDeCompra * (1 - DESCUENTO);
    console.log("Felicitaciones! tenes un 10% de descuento! El total de tu compra es: " + totalConDescuento);
} else {
    console.log("El total de la compra es: " + totalDeCompra);
}


///---------------------------------------------------------NO SE DEBE
const desc1: number = 0.1;
const desc2:number = 0.2;
const desc3:number = 0.3;

if (totalDeCompra >= 2000) {
    let totalConDescuento : number = totalDeCompra * (1 - desc1);
}else if(totalDeCompra >= 3000) {
    let totalConDescuento : number = totalDeCompra * (1 - desc2);
}else if (totalDeCompra >= 4000){
    let totalConDescuento : number = totalDeCompra * (1 - desc3);
}