function fizzBuzz(valor) {
  if (typeof valor !== "number") {
    return "Debe ingresar un número";
  }
  if ((valor % 3 == 0) & (valor % 5 == 0)) {
    return "FizzBuzz";
  } // si el número es divisible por 3 y 5, devuelve FizzBuzz
  if (valor % 3 == 0) {
    return "Fizz"; // si el número es divisible por 3, devuelve Fizz
  }
  if (valor % 5 == 0) {
    return "Buzz"; // si el número es divisible por 5, devuelve Buzz
  } else {
    return valor; // si el número no cumple ninguna de las condiciones anteriores, devuelve el número
  }
}

module.exports = { fizzBuzz };
