/*Dada una cadena, encuentre el primer carácter que se repite consecutivamente en ella y devuelva
su índice.Si no hay caracteres repetidos, devuelve - 1. Esta función debe ignorar cualquier
espacio y no debe distinguir entre mayúsculas y minúsculas: trate ’a’ como equivalente a ’A’.*/

function selector(cadena) {
    let letras = cadena.toUpperCase()
    let arrletras = letras.split("")
    let soloespacios = Array.from(new Set(arrletras)) // si la cadena es una colección de SOLO espacios
    console.log(soloespacios)
    let i = 0
    let j = arrletras.length - 1 //última letra index
    if (soloespacios[0] === " ") {
        return "la cadena solo tiene espacios"
    }
    if (arrletras.indexOf(arrletras[j]) === j) {
        return -1
    }

    for (item of arrletras) {
        if (item !== " ") {
            if (arrletras.indexOf(item) !== i) {

                return i
            }
        }
        i += 1
    }
}

console.log(selector("aA"))
module.exports = { selector };

