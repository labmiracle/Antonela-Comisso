function sumaArr(arreglo) {
    const arr = arreglo.map(Number);
    if (arr.length == 0) {
        return (0)
    }
    let total = 0;

    for (let i = 0; i < arr.length; i++)
        if (arr[i] > 0) {
            total += arr[i];
        }


    return total
}

sumaArr([1, 1, -1, "5", "-3"])

module.exports = { sumaArr };