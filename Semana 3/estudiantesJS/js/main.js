/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

window.addEventListener('load', init, false);

function init() {
    var nombreIn = document.getElementById('nombreIn');
    var apellidoIn = document.getElementById('apellidoIn');
    var notaIn = document.getElementById('notaIn');
    var emailIn = document.getElementById('emailIn');
    var registrarBtn = document.getElementById('registrarBtn');
    var estudiantesSlt = document.getElementById('estudiantesSlt');
    var buscarBtn = document.getElementById('buscarBtn');
    var estudianteInfo = document.getElementById('estudianteInfo');

    registrarBtn.onclick = onRegistrarBtn;
    buscarBtn.onclick = onBuscarBtn;

    var indexDePersona = 0;
    var nombres = ['Esteban', 'Juan', 'Maria'];
    var apellidos = ['Padilla', 'Rojas', 'Smith'];
    var notas = [90, 95, 100];
    var emails = ['esteban@mail.com', 'juan@mail.com', 'maria@mail.com'];
    llenarEstudiantesSlt();

    function onRegistrarBtn() {
        var nombre = nombreIn.value;
        var apellido = apellidoIn.value;
        var nota = notaIn.value;
        var email = emailIn.value;
        var isOK = true;

        if (nombre === '') {
            nombreIn.classList.add('error');
            isOK = false;
        } else {
            nombreIn.classList.remove('error');
        }

        if (apellido === '') {
            apellidoIn.classList.add('error');
            isOK = false;
        } else {
            apellidoIn.classList.remove('error');
        }

        if (nota === '') {
            notaIn.classList.add('error');
            isOK = false;
        } else {
            notaIn.classList.remove('error');
        }

        if (email === '') {
            emailIn.classList.add('error');
            isOK = false;
        } else {
            emailIn.classList.remove('error');
        }

        if (isOK) {
            nombres.push(nombre);
            apellidos.push(apellido);
            notas.push(Number(nota));
            emails.push(email);
            console.table(nombres);
            limpiar();
            llenarEstudiantesSlt();
        }
    }

    function onBuscarBtn() {
        // var email = estudiantesSlt.value;

        // for(var i=0; i < emails.length; i++){
        //     if(email === emails[i]){
        //         estudianteInfo.innerHTML = `Estudiante: ${nombres[i]} ${apellidos[i]}, Nota: ${notas[i]}`;
        //         return;
        //     }
        // }

        for (let i = 0; i < nombres.length; i++) {
                estudianteInfo.innerHTML = 'Estudiante: ' + nombres[i] + ' ' + apellidos[i] + ', Nota: ' + notas[i];
        }
    }

    function limpiar() {
        nombreIn.value = '';
        apellidoIn.value = '';
        notaIn.value = '';
        emailIn.value = '';
    }

    function llenarEstudiantesSlt() {
        estudiantesSlt.innerHTML = '';
        for (let index = 0; index < nombres.length; index++) {
            var nombre = nombres[index];
            var apellido = apellidos[index];
            var option = document.createElement('option');
            estudiantesSlt.appendChild(option);
            option.innerHTML = nombre + ' ' + apellido;
            option.value = index;
        }
    }
}