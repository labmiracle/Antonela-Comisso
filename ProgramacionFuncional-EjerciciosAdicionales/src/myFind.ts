function myFind<T>(
  arreglo: T[],
  condicion: (elemento: T) => boolean
): T | undefined {
  for (const elemento of arreglo) {
    if (condicion(elemento)) {
      return elemento;
    }
  }

  return undefined;
}
