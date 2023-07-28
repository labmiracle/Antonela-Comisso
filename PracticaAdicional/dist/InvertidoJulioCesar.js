"use strict";
function invertirTexto(texto) {
    return texto.split("").reverse().join("");
}
function cifradoJulioCesarInvertido(texto, desplazamiento) {
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
function descifradoJulioCesarInvertido(textoCifrado, desplazamiento) {
    const textoDesinvertido = invertirTexto(textoCifrado); // Invierte el texto primero
    return cifradoJulioCesarInvertido(textoDesinvertido, -desplazamiento); // Luego realiza el descifrado César
}
// Ejemplo de uso:
const textoOriginal = "WIKIPEDIA, LA ENCICLOPEDIA LIBRE";
const desplazamiento = 6;
const textoCodificado = cifradoJulioCesarInvertido(textoOriginal, desplazamiento);
console.log("Texto original:", textoOriginal);
console.log("Texto codificado:", textoCodificado);
const textoDecodificado = descifradoJulioCesarInvertido(textoCodificado, desplazamiento);
console.log("Texto decodificado:", textoDecodificado);
