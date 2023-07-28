function cifradoCesar(texto: string, desplazamiento: number): string {
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

  return resultado;
}

function decifradoCesar(textoCifrado: string, desplazamiento: number): string {
  return cifradoCesar(textoCifrado, -desplazamiento);
}

const textoOriginal: string = "WIKIPEDIA, LA ENCICLOPEDIA LIBRE";
const desplazamiento: number = 6;

const textoCodificado: string = cifradoCesar(textoOriginal, desplazamiento);
console.log("Texto original:", textoOriginal);
console.log("Texto codificado:", textoCodificado);

const textoDecodificado: string = decifradoCesar(
  textoCodificado,
  desplazamiento
);
console.log("Texto decodificado:", textoDecodificado);
