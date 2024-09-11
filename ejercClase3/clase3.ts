import * as fs from 'readline-sync';

// declarar una variable
let valor1 : number; // undefined

let numero1 : number = 3;
let numero2 : number = 5;

//reasignamos los valores

numero1 = 7;
numero2 = 10;

let resultado : number = numero1 + numero2;

let mensaje:string = "El resultado de la suma es: " + resultado;

// console.log(mensaje);

//--------------------------------------------------------------------------
//Tipos de variables 

//Numerico

let iva : number = 21;
let total : number = 316.21;
// console.log(iva);
// console.log(typeof iva);
//Logicos o booleanos

let estaLogueado : boolean = false;
let incluyeIva : boolean = true;
// console.log(estaLogueado);
// console.log(typeof incluyeIva);
//String o cadena de texto

let texto : string = "hola \"como\" estas";

let texto1 : string = "Texto con \\ un salto de linea \n aqui y un tabulador \t sigue texto"
// console.log(typeof texto1);

//-----------------------------------------------------
//constantes

const GRAVEDAD : number = 9.8;


// area del rectagulo 

// let base :number = 10;
// let altura: number = 5;

// let areaDelRectangulo: number = base * altura;

// console.log("El area del rectagulo es: " + areaDelRectangulo);

// interactuar con el usuario con readline-sync

// let mensaje3 : string = fs.question("Ingresa un mensaje: ");

// console.log("El mensaje ingresado es : " + mensaje3);

let base :number = fs.questionInt("Ingrese la medida de la base: ");
let altura : number = fs.questionInt("Ingrese la medida de la altura: ");

let areaDelRectangulo: number = base * altura;

console.log("El resultado del area del rectangulo es: " + areaDelRectangulo);

