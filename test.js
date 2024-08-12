const imprimirMensaje = require('./html/script');

test('El script imprime "Hola Mundo"', () => {
    console.log = jest.fn();
    expect(imprimirMensaje()).toBe("¡Hola Mundo!");
});