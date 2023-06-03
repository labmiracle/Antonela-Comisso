const { selector } = require("../Ejercicio_15.js");

describe("testeo de la función selector, Ej. 1.5", () => {
  test("si no hay letras repetidas", () => {
    expect(selector("Hola")).toBe(-1);
  });

  test("si se repiten letras en la cadena", () => {
    expect(selector("Hola qué tal")).toBe(10);
  });

  test("la función debe ignorar espacios", () => {
    expect(selector("   ")).toBe("la cadena solo tiene espacios");
  });

  test("la función no debe ser case sensitive", () => {
    expect(selector("aAnn")).toBe(1);
  });
});
