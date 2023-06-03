const { sumaArr } = require("../Ejercicio_14.js");

describe("testeo de la función sumaArr, Ej. 1.4", () => {
  test("si el arreglo está vacio", () => {
    expect(sumaArr([])).toBe(0);
  });
  test("si el arreglo tiene valores positivos de tipo string", () => {
    expect(sumaArr(["5"])).toBe(5);
  });
  test("si el arreglo tiene valores negativos de tipo string", () => {
    expect(sumaArr(["-5"])).toBe(0);
  });
  test("si el arreglo tiene valores negativos", () => {
    expect(sumaArr([1, -1])).toBe(1);
  });
});
