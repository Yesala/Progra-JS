"use strict";
window.addEventListener('load', init, false);
function init() {
    var gastoDiario1 = 200;
    var gastoDiario2 = 300;
    var gastoDiario3 = 400;
    var gastoDiario4 = 600;
    var gastoDiario5 = 450;
    var gastoDiario6 = 600;
    var gastoDiario7 = 800;
    var gastoSemanal = [gastoDiario1, gastoDiario2, gastoDiario3, gastoDiario4, gastoDiario5, gastoDiario6, gastoDiario7];
    gastoDiario7 = 900;
    gastoSemanal[6] = 900;

    // console.log(gastoSemanal[gastoSemanal.length - 1]);
    // console.log(gastoDiario7);

    var indexDePersona = 3;
    var nombres = ['Esteban', 'Juan', 'Maria'];
    var apellidos = ['Padilla', 'Rojas', 'Smith'];
    var notas = [35, 32, 33]

    nombres.push('Pedro', 'Antonio');
    apellidos.push('Piedra', 'Sanchez');
    notas.push(34, 44);

    var indexARemover = 1;
    nombres.splice(indexARemover, 1);
    apellidos.splice(indexARemover, 1);
    notas.splice(indexARemover, 1);

    console.table(nombres);
    console.log(nombres[indexDePersona] + ' ' + apellidos[indexDePersona] + ' ' + notas[indexDePersona]);
}