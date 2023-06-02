/*Dada una matriz de 1s y 0s, encuentre el número máximo de 1s consecutivos en esta matriz. Si
hay algún valor distinto de 1 o 0 en la matriz, es un error y devuelve -1. Los 1s y 0s pueden ser
valores de cadena o enteros, ambos son aceptables y deben considerarse equivalentes.*/

function matrix(arreglo) {
    const arreglonum = arreglo.map(Number); //paso todo a integer

    // chequeo si hay valores distintos de 0 y 1 
    const result = arreglonum.filter(arreglonum => (arreglonum !== 0 && arreglonum !== 1));
    if (result.length !== 0) {
        return -1
    }

    //ahora trabajo con strings para poder usar sus métodos
    let arrTostr = arreglonum.toString();
    let strSinComas = arrTostr.split(",").join("");
    let arrDeUnos = strSinComas.split("0");
    let Result = arrDeUnos.map(myFunction)

    function myFunction(num) {
        return num.length;
    };
    return (Math.max(...Result))
};

matrix([0, 1, 1, 0, 1, 1, "1", "1", 0, 0, 1]);
module.exports = { matrix };