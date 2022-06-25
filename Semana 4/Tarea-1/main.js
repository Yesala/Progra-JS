"use strict";

window.addEventListener('load', init, false);

function init() {
    var dailyTemp = [30,35,38,40,29,33,39];
    var totalTemp = 0;
    var average = 0;

    for(let i =0; i < dailyTemp.length; i++){
        totalTemp += dailyTemp[i];
        average = (totalTemp / dailyTemp.length).toFixed(1);
    }
    console.log('El promedio de temperatura semanal es: ' + average + ' grados');
}
