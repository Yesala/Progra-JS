"use strict";

window.addEventListener('load', init, false);

function init() {
    var notaExamenIn = document.getElementById('notaExamenIn');
    var promedioDeColegioIn = document.getElementById('promedioDeColegioIn');
    var mostrarResultadoBtn = document.getElementById('mostrarResultadoBtn');
    mostrarResultadoBtn.onclick = onMostrarResultadoBtn;
    var resultadoLbl = document.getElementById('resultadoLbl');

    function onMostrarResultadoBtn() {
        var notaDeExamen = Number(notaExamenIn.value);
        var promedioDeColegio = Number(promedioDeColegioIn.value);

        var msj = '';
        var esMayorA600 = notaDeExamen > 600;
        var notaEstaEntre500o600 = notaDeExamen >= 500 || notaDeExamen <= 600;
        var promedioEsMayorA80 = promedioDeColegio > 80;

        if (esMayorA600 || (notaEstaEntre500o600 && promedioEsMayorA80)) {
            msj = 'El estudiante ingresa a Cenfotec';
        } else {
            msj = 'El estudiante no ingresa a Cenfotec';
        }

        resultadoLbl.innerHTML = msj;
    }
}