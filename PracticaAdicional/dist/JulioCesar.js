"use strict";
function cifradoCesar(texto, desplazamiento) {
    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let resultado = "";
    for (const letra of texto) {
        const letraMayuscula = letra.toUpperCase();
        const indiceActual = alfabeto.indexOf(letraMayuscula);
        if (indiceActual !== -1) {
            const indiceCifrado = (indiceActual + desplazamiento + alfabeto.length) % alfabeto.length;
            const letraCifrada = alfabeto[indiceCifrado];
            resultado +=
                letra === letraMayuscula ? letraCifrada : letraCifrada.toLowerCase();
        }
        else {
            resultado += letra;
        }
    }
    return resultado;
}
function decifradoCesar(textoCifrado, desplazamiento) {
    return cifradoCesar(textoCifrado, -desplazamiento);
}
const textoOriginal = "WIKIPEDIA, LA ENCICLOPEDIA LIBRE";
const desplazamiento = 6;
const textoCodificado = cifradoCesar(textoOriginal, desplazamiento);
console.log("Texto original:", textoOriginal);
console.log("Texto codificado:", textoCodificado);
const textoDecodificado = decifradoCesar(textoCodificado, desplazamiento);
console.log("Texto decodificado:", textoDecodificado);
