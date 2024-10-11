let cantidadButacas: number= 100;
let butacasDeCine : number[] = new Array(cantidadButacas);
const cargarArreglo = (arreglo: number[], longitud: number ) => {
    for(let i :number=0; i < longitud; i++){
        arreglo[i]= Math.floor(Math.random() * 2);
    }
    console.log(arreglo)
}
const evaluarButacas = (arreglo:number[], longitud:number) => {
    let butacasOcupadas: number =0;
    for(let i: number=0; i < longitud;i++){
        if (arreglo[i] === 1){
            butacasOcupadas++
        }
    }
    return butacasOcupadas;
}
cargarArreglo(butacasDeCine,cantidadButacas);
let ocupadas : number = evaluarButacas(butacasDeCine, cantidadButacas);
console.log("La cantidad de butacas ocupadas en el cine es ", ocupadas);