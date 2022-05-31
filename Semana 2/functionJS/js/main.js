/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

window.addEventListener('load', init, false);

function init() {

    //Ambito local de la funcion init
    var mensaje = '';

    function concatenarParaConsola(pmensaje1, pmensaje2, pmensaje3) {
        //es Ambito global de la funcion concatenarParaConsola
        var test = false;
        mensaje = pmensaje1 + pmensaje2 + pmensaje3;
        return mensaje;
    }


    console.log(mensaje);

    var mensaje1 = concatenarParaConsola('Hola ', 'Esteban', '!');
    console.log(mensaje1);

    var mensaje2 = concatenarParaConsola('Hola ', 'Marie', '!');
    console.log(mensaje2);

    // concatenarParaConsola("Hola", false);
    // concatenarParaConsola("Hola", "Maria");
    // concatenarParaConsola(`Hola`, "Abril");
    // concatenarParaConsola('Adios', 'Esteban', 'y hasta pronto!');
}