const { bisiesto } = require('../Ejercicio_12.js');

describe('testeo de la función Bisiesto, Ej. 1.2', () => {
    test('si el número es divisible por 4', () => {
        expect(bisiesto(2004)).toBe("Es bisiesto");
    });
    test('si el número es divisible por 400', () => {
        expect(bisiesto(2008)).toBe("Es bisiesto");
    });
    test('si el número es divisible 100', () => {
        expect(bisiesto(2003)).toBe("No es bisiesto");
    });
    test('cualquier otro año', () => {
        expect(bisiesto(1999)).toBe("No es bisiesto");
    });

});