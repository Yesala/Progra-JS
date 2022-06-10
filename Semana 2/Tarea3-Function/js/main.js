"use strict";
window.addEventListener('load', init, false);

function init() {
    var firstNumberIn = document.getElementById('firstNumber');
    var secondNumberIn = document.getElementById('secondNumber');
    var mostrarResultadoBtn = document.getElementById('mostrarResultadoBtn');
    mostrarResultadoBtn.onclick = onMostrarResultadoBtn;
    var resultadoLbl = document.getElementById('resultadoLbl');

    function onMostrarResultadoBtn() {
        var firstNumber = Number(firstNumberIn.value);
        var secondNumber = Number(secondNumberIn.value);
        
        if(firstNumber == secondNumber){
            resultadoLbl.innerHTML = "Los números son iguales";
        }else if (firstNumber > secondNumber){
            resultadoLbl.innerHTML = 'Número máximo: ' + firstNumber;
        }else{
            resultadoLbl.innerHTML = 'Número máximo: ' + secondNumber;
        }
    }
}
