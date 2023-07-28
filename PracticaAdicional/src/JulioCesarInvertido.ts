function cifradoJulioCesarInvertido(
  texto: string,
  desplazamiento: number
): string {
  const alfabeto: string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  let resultado: string = "";

  for (const letra of texto) {
    const letraMayuscula = letra.toUpperCase();
    const indiceActual = alfabeto.indexOf(letraMayuscula);
    if (indiceActual !== -1) {
      const indiceCifrado =
        (indiceActual + desplazamiento + alfabeto.length) % alfabeto.length;
      const letraCifrada = alfabeto[indiceCifrado];
      resultado +=
        letra === letraMayuscula ? letraCifrada : letraCifrada.toLowerCase();
    } else {
      resultado += letra;
    }
  }

  return resultado.split("").reverse().join(""); // Invierte el String antes de devolverlo
}

function descifradoJulioCesarInvertido(
  textoCifrado: string,
  desplazamiento: number
): string {
  const textoInvertido = textoCifrado.split("").reverse().join(""); // Desinvierte el String primero
  return cifradoJulioCesarInvertido(textoInvertido, -desplazamiento); // Luego realiza el descifrado César
}

// Ejemplo de uso:
const textoOriginal: string = "WIKIPEDIA, LA ENCICLOPEDIA LIBRE";
const desplazamiento: number = 6;

const textoCodificado: string = cifradoJulioCesarInvertido(
  textoOriginal,
  desplazamiento
);
console.log("Texto original:", textoOriginal);
console.log("Texto codificado:", textoCodificado);

const textoDecodificado: string = descifradoJulioCesarInvertido(
  textoCodificado,
  desplazamiento
);
console.log("Texto decodificado:", textoDecodificado);
