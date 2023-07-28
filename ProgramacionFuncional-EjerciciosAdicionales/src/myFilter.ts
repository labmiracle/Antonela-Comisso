function myFilter<T>(arreglo: T[], condicion: (elemento: T) => boolean): T[] {
  const resultado: T[] = [];

  for (const elemento of arreglo) {
    if (condicion(elemento)) {
      resultado.push(elemento);
    }
  }

  return resultado;
}
