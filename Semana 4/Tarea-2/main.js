"use strict";

window.addEventListener('load', init, false);

function init() {
    var dailySales = [30000,67000,124900,230785,155000,189050];
    var totalSales = 0;

    for(let i =0; i < dailySales.length; i++){
        totalSales += dailySales[i];
    }

    console.log('El promedio de ventas diario es: ¢' + (totalSales / dailySales.length).toFixed(2) +'\n'+ 'y el total semanal de 6 días es: ¢' + totalSales);
}
