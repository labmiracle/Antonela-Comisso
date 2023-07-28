function myMap<T, U>(arreglo: T[], transformacion: (elemento: T) => U): U[] {
  const resultado: U[] = [];

  for (const elemento of arreglo) {
    const elementoTransformado = transformacion(elemento);
    resultado.push(elementoTransformado);
  }

  return resultado;
}
