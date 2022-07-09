/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

import { Persona } from './persona.js';

window.addEventListener('load', init, false);

function init() {
    var nombreIn = document.getElementById('nombreIn');
    var apellidoIn = document.getElementById('apellidoIn');
    var notaIn = document.getElementById('notaIn');
    var emailIn = document.getElementById('emailIn');
    var registrarBtn = document.getElementById('registrarBtn');
    var estudiantesSlt = document.getElementById('estudiantesSlt');
    var buscarBtn = document.getElementById('buscarBtn');
    var eliminarBtn = document.getElementById('eliminarBtn');
    var estudianteInfo = document.getElementById('estudianteInfo');
    var estudiantesTbl = document.getElementById('estudiantesTbl');

    registrarBtn.onclick = onRegistrarBtn;
    buscarBtn.onclick = onBuscarBtn;
    eliminarBtn.onclick = onEliminarBtn;
    var estudiantes = [];

    if (window.localStorage.getItem('estudiantes') !== null) {
        cargarDesdeLocalStorage();
    } else {
        var esteban = new Persona('Esteban', 'Padilla', 90, 'ep@mail.com');
        var juan = new Persona('Juan', 'Rojas', 95, 'jr@mail.com');
        var maria = new Persona('Maria', 'Smith', 100, 'ms@mail.com');
        estudiantes.push(esteban);
        estudiantes.push(juan);
        estudiantes.push(maria);
    }

    llenarEstudiantesSlt();
    llenarEstudiantesTbl();

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

        if (email === '' || !isEmailValid(email)) {
            emailIn.classList.add('error');
            isOK = false;
        } else {
            emailIn.classList.remove('error');
        }

        if (isOK) {
            var persona = new Persona(nombre, apellido, Number(nota), email);
            estudiantes.push(persona);

            window.localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

            limpiar();
            llenarEstudiantesSlt();
            llenarEstudiantesTbl();
        }
    }

    function onBuscarBtn() {
        var email = estudiantesSlt.value;
        for (var i = 0; i < estudiantes.length; i++) {
            var persona = estudiantes[i];
            if (email === persona.email) {
                estudianteInfo.innerHTML = `<b>Información:</b> ${persona.nombre} ${persona.apellido}<br><b>Nota:</b> ${persona.nota}<br><b>Email:</b> ${persona.email}<br> ${persona.aprobar()}`;
                return;
            }
        }
    }

    function eliminarEstudiante(email) {
        estudiantes.forEach((persona, i) => {
            if (email === persona.email) {
                estudiantes.splice(i, 1);
                window.localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
                cargarDesdeLocalStorage();
                llenarEstudiantesSlt();
                llenarEstudiantesTbl();
            }
        });
    }

    function onEliminarBtn() {
        var email = estudiantesSlt.value;
        eliminarEstudiante(email);
    }

    function limpiar() {
        nombreIn.value = '';
        apellidoIn.value = '';
        notaIn.value = '';
        emailIn.value = '';
    }

    function llenarEstudiantesSlt() {
        estudianteInfo.innerHTML = '';
        estudiantesSlt.innerHTML = '';

        for (let index = 0; index < estudiantes.length; index++) {
            var persona = estudiantes[index];
            var nombre = persona.nombre;
            var apellido = persona.apellido;
            var option = document.createElement('option');
            estudiantesSlt.appendChild(option);
            option.innerHTML = nombre + ' ' + apellido;
            option.value = persona.email;
        }
    }

    function llenarEstudiantesTbl() {
        estudiantesTbl.innerHTML = '';
        //TODO:
        //1. Llenar la table con los datos en estudiantes.
        var tr = estudiantesTbl.insertRow();
        // var tr = document.createElement('tr');
        // estudiantesTbl.appendChild(tr);

        var th = document.createElement('th');
        var textNode = document.createTextNode('Nombre');
        th.appendChild(textNode);
        // th.innerHTML = 'Nombre';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Apellido';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Nota';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Email';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Eliminar';
        tr.appendChild(th);

        estudiantes.forEach(function (estudiante) {

            tr = estudiantesTbl.insertRow();
            // estudiantesTbl.appendChild(tr);

            var td = tr.insertCell();//document.createElement('td');
            td.innerHTML = estudiante.nombre;
            // tr.appendChild(td);

            td = tr.insertCell();//document.createElement('td');
            td.innerHTML = estudiante.apellido;
            // tr.appendChild(td);

            td = tr.insertCell();//document.createElement('td');
            td.innerHTML = estudiante.nota;
            // tr.appendChild(td);

            td = tr.insertCell();//document.createElement('td');
            td.innerHTML = estudiante.email;
            // tr.appendChild(td);

            td = tr.insertCell();//document.createElement('td');
            td.innerHTML = 'Eliminar';
            td.className = 'eliminar_button';
            td.onclick = onEliminarTd;
            // td.email = estudiante.email;
            td.estudiante = estudiante;
            // tr.appendChild(td);
        });

        //2. Agregar en el td de eliminar un evento onclick = onEliminarTd
        //3. Agregar dinamicamente al objecto td de eliminar el email de la persona td.email = persona.email;
    }

    function onEliminarTd(event) {
        var estudiante = event.target.estudiante;
        eliminarEstudiante(estudiante.email);
    }

    function cargarDesdeLocalStorage() {
        var dataSerializada = window.localStorage.getItem('estudiantes');
        var data = JSON.parse(dataSerializada);
        estudiantes = [];
        data.forEach(function (personaData) {
            // var persona = new Persona(estudianteData.nombre, estudianteData.apellido, estudianteData.nota, estudianteData.email);
            var persona = new Persona();
            persona.constructorFromData(personaData);
            estudiantes.push(persona);
        });
    }

    function isEmailValid(email) {
        for (let i = 0; i < estudiantes.length; i++) {
            var persona = estudiantes[i];
            if (persona.email === email) {
                return false;
            }
        }
        return true;
    }
}