// test.js
console.log = jest.fn();  // Mock de console.log

require('../index.html'); // Carga el archivo HTML

test('El script imprime "Hola Mundo"', () => {
    expect(console.log).toHaveBeenCalledWith("Hola Mundo");
});
