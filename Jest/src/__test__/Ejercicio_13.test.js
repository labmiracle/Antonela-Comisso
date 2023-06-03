const { ADN } = require("../Ejercicio_13.js");

describe("testeo de la función ADN, Ej. 1.3", () => {
  test("si la cadena contiene A", () => {
    expect(ADN("A")).toBe("A");
  });
  test("si la cadena contiene G", () => {
    expect(ADN("G")).toBe("G");
  });
  test("si cadena contiene T", () => {
    expect(ADN("T")).toBe("T");
  });
  test("si la cadena contiene C", () => {
    expect(ADN("C")).toBe("C");
  });
  test("si la cadena está vacía", () => {
    expect(ADN("")).toBe("");
  });
});
