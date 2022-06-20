"use strict";
window.addEventListener('load', init, false);
import { Carro } from './carro.js';

function init() {
    var carroSlt = document.getElementById('carroSlt');
    var crearBtn = document.getElementById('crearBtn');
    var carros = [];

    crearBtn.onclick = () => {
        var value = carroSlt.value;
        switch (value) {
            case '0':
                carros.push(new Carro("images/carro1.png"));
                break;
            case '1':
                carros.push(new Carro("images/azul.png"));
                break;
            case '2':
                carros.push(new Carro("images/rojo.png"));
                break;
            case '3':
                carros.push(new Carro("images/amarillo.png"));
                break;
            default:
                break;
        }

        console.log(carros);
    }
}