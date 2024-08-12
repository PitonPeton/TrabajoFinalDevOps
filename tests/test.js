// tests/script.test.js
const imprimirMensaje = require('./script.js').imprimirMensaje;

test('El script imprime "Hola Mundo"', () => {
    console.log = jest.fn();  // Mock de console.log
    imprimirMensaje();
    expect(console.log).toHaveBeenCalledWith("Hola Mundo");
});

