"use strict";

window.addEventListener('load', init, false);

function init() {
    var cantidadHoras = document.getElementById('quantityHours');
    var pagoHora = document.getElementById('salaryHour');
    var mostrarResultadoBtn = document.getElementById('mostrarResultadoBtn');
    mostrarResultadoBtn.onclick = onMostrarResultadoBtn;
    var resultadoLbl = document.getElementById('resultadoLbl');
    
    function onMostrarResultadoBtn() {
        var cantidaHorasTrabajadas = Number(cantidadHoras.value);
        var pagoHoraTrabajada = Number(pagoHora.value);
        var horasExtra = (cantidaHorasTrabajadas-40) * pagoHoraTrabajada * 1.5;

        var salarioRegular = cantidaHorasTrabajadas * pagoHoraTrabajada;
        var salarioConExtras = horasExtra + salarioRegular;

        if (cantidaHorasTrabajadas > 40){
            resultadoLbl.innerHTML = 'Monto a pagar: ¢' + salarioConExtras;
        }else {
            resultadoLbl.innerHTML = 'Monto a pagar: ¢' + salarioRegular;
        }
    }
}

