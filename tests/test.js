// tests/script.test.js
const imprimirMensaje = require('./script');

test('El script imprime "Hola Mundo"', () => {
    console.log = jest.fn();  // Mock de console.log
    imprimirMensaje();
    expect(console.log).toHaveBeenCalledWith("Hola Mundo");
});

test('debería imprimir "¡Hola Mundo!" en la consola', ()=> {
  expect(imprimirMensaje()).toBe("¡Hola Mundo!");
});