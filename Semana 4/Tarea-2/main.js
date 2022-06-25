"use strict";

window.addEventListener('load', init, false);

function init() {
    var dailySales = [30000,67000,124900,230785,155000,189050];
    var totalSales = 0;
    var total = 0;

    for(let i =0; i < dailySales.length; i++){
        totalSales += dailySales[i];
        total = (totalSales / dailySales.length).toFixed(2);
    }

    console.log('El promedio de ventas diario es: ¢' + total +'\n'+ 'y el total semanal de ventas es: ¢' + totalSales);
}
