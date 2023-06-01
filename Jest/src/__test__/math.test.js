const { sum, sub, mul, div } = require('../src/math.js');
describe('juego de operaciones aritmeticas', () => {
    test('suma de numeros', () => {
        expect(sum(1, 1)).toBe(2);
    });
    test('resta de numeros', () => {
        expect(sub(1, 1)).toBe(0);
    });
    test('multiplicacion de numeros', () => {
        expect(mul(1, 1)).toBe(1);
    });
    test('division de numeros', () => {
        expect(div(1, 1)).toBe(1);
    });
});
