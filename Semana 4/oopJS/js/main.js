"use strict";
window.addEventListener('load', init, false);
function init() {
    var juan = new Gato('juan', 'negro', 5, 30);
    var pedro = new Gato('pedro', 'blanco', 6, 30);

    juan.nombre = 'Juan';

    juan.correr();
    pedro.correr();
    juan.brincar();

    console.log(juan);
    console.log(pedro);
}





