// Filtra los productos de la categoría "Ropa" y crea un nuevo array que contenga estos productos.
// A partir del array original, calcula el precio total de todos los productos en la categoría "Calzado".
// Genera un nuevo array que incluya los nombres de todos los productos con precios mayores a 20, en mayúsculas.
const productos = [
  { nombre: "Camiseta", precio: 20, categoria: "Ropa" },
  { nombre: "Pantalón", precio: 35, categoria: "Ropa" },
  { nombre: "Zapatillas", precio: 50, categoria: "Calzado" },
  { nombre: "Bolso", precio: 25, categoria: "Accesorios" },
  { nombre: "Gorra", precio: 15, categoria: "Accesorios" },
  { nombre: "Sandalias", precio: 20, categoria: "Calzado" }
];
//1
const pilchas = productos.filter(producto => producto.categoria.toLowerCase() === "ropa");
console.log(pilchas);
//2
const calzados = productos.filter(producto => producto.categoria.toLowerCase() === "calzado");
const totalCalzado:number = calzados.reduce((acumulador,calzado) => acumulador + calzado.precio , 0);
console.log(totalCalzado);
//3
const mayoresAVeintee = productos.filter(producto => producto.precio > 20).map(producto => producto.nombre.toUpperCase())
console.log(mayoresAVeintee);