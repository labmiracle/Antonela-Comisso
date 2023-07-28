function myReduce<T, U>(
  arreglo: T[],
  funcionAcumuladora: (acumulado: U, elemento: T) => U,
  valorInicial: U
): U {
  let acumulado: U = valorInicial;

  for (const elemento of arreglo) {
    acumulado = funcionAcumuladora(acumulado, elemento);
  }

  return acumulado;
}
