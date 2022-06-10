"use strict";
window.addEventListener('load', init, false);

function init() {
    var firstNumberIn = document.getElementById('firstNumber');
    var secondNumberIn = document.getElementById('secondNumber');
    var mostrarResultadoBtn = document.getElementById('mostrarResultadoBtn');
    mostrarResultadoBtn.onclick = onMostrarResultadoBtn;

    var firstNumber = Number(firstNumberIn.value);
    var secondNumber = Number(secondNumberIn.value);

    function onMostrarResultadoBtn() {
        if(firstNumber == secondNumber){
            return "Los numeros son iguales"
        }else if (firstNumber > secondNumber){
            return document.write("Número máximo: "+ firstNumber);
        }else if (secondNumber > firstNumber){
            return document.write("Número máximo: "+ secondNumber);
        }
    }
}
