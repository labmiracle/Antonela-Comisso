function bisiesto(año) {
    if (año % 4 == 0) {
        return "Es bisiesto"; //Los años que son divisibles por 4 son años bisiestos
    };
    if (año % 400 == 0) {
        return "Es bisiesto"; //Los años que son divisibles por 400 son años bisiestos
    };
    if (año % 100 == 0) {
        return "No es bisiesto"; //Los años que son divisibles por 400 son años bisiestos
    }
    else {
        return "No es bisiesto";
    }
}

console.log(bisiesto(2008));
module.exports = { bisiesto };