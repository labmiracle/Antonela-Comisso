const { matrix } = require('../Ejercicio_16.js');

describe('testeo de la función matrix, Ej. 1.6', () => {
    test('si hay valores distintos  1 y 0', () => {
        expect(matrix([1, 0, 3])).toBe(-1);
    });
    test('si hay strings de  "1" y "0"', () => {
        expect(matrix(["1", "0", 1])).toBe(1);
    });

    test('caso en que calcula la cadena de 1s más larga', () => {
        expect(matrix([0, 1, 1, 0, 1, 1, "1", "1", 0, 0, 1])).toBe(4);
    });

});