
export function crearMatrizNumeros(filas:number,columnas:number):Number[][] {
  const matrix:number[][] = new Array(filas);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(columnas);
  }
  return matrix;
}

