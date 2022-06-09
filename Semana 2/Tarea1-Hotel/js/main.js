"use strict";

window.addEventListener('load', init, false);

function init() {
    var cantidadNochesIn = document.getElementById('quantity');
    var tipoClienteIn = document.getElementById('clientTypeHotel');
    var mostrarResultadoBtn = document.getElementById('mostrarResultadoBtn');
    mostrarResultadoBtn.onclick = onMostrarResultadoBtn;
    var resultadoLbl = document.getElementById('resultadoLbl');
    

    function onMostrarResultadoBtn() {
        var valorNoche = 100;
        var cantidaNoches = Number(cantidadNochesIn.value);
        var tipoCliente = tipoClienteIn.value;

        var descuento5 = 0.05 * 100;
        var descuento10 = 0.10 * 100;
        var regular = (descuento5 + valorNoche) * cantidaNoches;
        var frecuente = (descuento10 + valorNoche) * cantidaNoches;

        if (tipoCliente == 'Regular'){
            resultadoLbl.innerHTML = 'Monto a pagar: $' + regular;
        }else{
            resultadoLbl.innerHTML = 'Monto a pagar: $' + frecuente;
        }
    }
}