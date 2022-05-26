/**
* @name main.js
* @file Tarea1-Sastrería
* @author <Yensy Salazar>
* @version 1.0.0
*/

"use strict";

window.onload = init;
// window.addEventListener('load', init);
function init() {
    console.log('App running!');
    
    var cantidadDePersonasIn = document.getElementById('cantidadDePersonasIn');
    var cantidadDeTelaPorPersonaIn = document.getElementById('cantidadDeTelaPorPersonaIn');
    var precionDeTelaIn = document.getElementById('precionDeTelaIn');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    calcularBtn.onclick = onCalcularBtn;

    function onCalcularBtn() {
        var cantidadTela = Number(cantidadDeTelaPorPersonaIn.value);
        var cantidadPersonas = Number(cantidadDePersonasIn.value);
        var precioTela = Number(precionDeTelaIn.value);
        var cantidadTotalTela = cantidadTela * cantidadPersonas;
        var precioTotalTela = cantidadTotalTela * precioTela;

        console.log('Cantidad total de tela:' + cantidadTotalTela + ' metros', ' Costo total de tela: ¢' + precioTotalTela);
        resultadoLbl.innerHTML = ' Metros de Tela: ' + cantidadTotalTela + 'm ' + ' Precio Final: ¢' + precioTotalTela;
    }
}