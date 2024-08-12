// script.js
function imprimirMensaje() {
    console.log("Hola Mundo");
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = { imprimirMensaje };

// Llama a la función cuando el script es cargado
imprimirMensaje();
