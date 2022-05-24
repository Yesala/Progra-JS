/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

window.onload = init;
// window.addEventListener('load', init);
function init() {
    console.log('App running!');
    //0. Obtener los elementos de html para mi UI
    var cantidadDePersonasIn = document.getElementById('cantidadDePersonasIn');
    var cantidadDeTelaPorPersonaIn = document.getElementById('cantidadDeTelaPorPersonaIn');
    var precionDeTelaIn = document.getElementById('precionDeTelaIn');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    calcularBtn.onclick = onCalcularBtn;

    //1. Declare variables and Initialize variables

    //2. Events
    function onCalcularBtn() {
        //3. Program Logic

    }
}