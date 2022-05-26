/**
* @name main.js
* @file Tarea1-Sastrería
* @author <Yensy Salazar>
* @version 1.0.0
*/

"use strict";

window.onload = init;

function init() {

    console.log('App running!');
    
    var producto1In = document.getElementById('producto1');
    var producto2In = document.getElementById('producto2');
    var producto3In = document.getElementById('producto3');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    calcularBtn.onclick = onCalcularBtn;

    function onCalcularBtn() {
        var producto1 = Number(producto1In.value);
        var producto2 = Number(producto2In.value);
        var producto3 = Number(producto3In.value);
        var sumaProductos = producto1 + producto2 + producto3;
        var impuesto = 13;
        var impuestoACobrar = sumaProductos * (impuesto / 100);
        var precioNeto = sumaProductos + impuestoACobrar;

        console.log('Total: ' + precioNeto);
        resultadoLbl.innerHTML = 'Total: ¢' + precioNeto;
    }
}

