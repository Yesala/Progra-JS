/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

import { Empresa } from './empresa.js';
import { Persona } from './persona.js';

window.addEventListener('load', init, false);

function init() {
    var nombreEmpresaIn = document.getElementById('nombreEmpresaIn');
    var registrarEmpresaBtn = document.getElementById('registrarEmpresaBtn');
    var empresasSlt = document.getElementById('empresasSlt');
    var mostrarEmpresaBtn = document.getElementById('mostrarEmpresaBtn');

    var nombreIn = document.getElementById('nombreIn');
    var apellidoIn = document.getElementById('apellidoIn');
    var fondosIn = document.getElementById('fondosIn');
    var mensualidadIn = document.getElementById('mensualidadIn');
    var emailIn = document.getElementById('emailIn');


    var registrarClienteBtn = document.getElementById('registrarClienteBtn');
    var clientesTbl = document.getElementById('clientesTbl');

    registrarEmpresaBtn.onclick = onRegistrarEmpresaBtn;
    registrarClienteBtn.onclick = onRegistrarBtn;

    var empresas = [];

    if (window.localStorage.getItem('empresas') !== null) {
        cargarDesdeLocalStorage();
    } else {
        var kolbi = new Empresa('Kolbi');
        var claro = new Empresa('Claro');
        var moviStar = new Empresa('MoviStar');
        empresas.push(kolbi);
        empresas.push(claro);
        empresas.push(moviStar);
        window.localStorage.setItem('empresas', JSON.stringify(empresas));
    }

    llenarEmpresasSlt();
    // llenarEstudiantesTbl();

    function onRegistrarEmpresaBtn() {
        var nombre = nombreEmpresaIn.value;
        var isOK = true;

        if (nombre === '') {
            nombreIn.classList.add('error');
            isOK = false;
        } else {
            nombreIn.classList.remove('error');
        }

        if (isOK) {
            empresas.push(new Empresa(nombre));
            window.localStorage.setItem('empresas', JSON.stringify(empresas));
            nombreEmpresaIn.value = '';
            llenarEmpresasSlt();
        }
    }

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

    function llenarEmpresasSlt() {
        empresasSlt.innerHTML = '';
        empresas.forEach(function (empresa) {
            var option = document.createElement('option');
            empresasSlt.appendChild(option);
            option.innerHTML = empresa.nombre;
            option.value = empresa.nombre;
        });
    }

    function llenarEstudiantesTbl() {
        clientesTbl.innerHTML = '';
        //TODO:
        //1. Llenar la table con los datos en estudiantes.
        var tr = clientesTbl.insertRow();
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

            tr = clientesTbl.insertRow();
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
    }

    function onEliminarTd(event) {
        var estudiante = event.target.estudiante;
        eliminarEstudiante(estudiante.email);
    }

    function cargarDesdeLocalStorage() {
        var dataSerializada = window.localStorage.getItem('empresas');
        var data = JSON.parse(dataSerializada);
        empresas = [];
        data.forEach(function (empresaData) {
            var empresa = new Empresa(empresaData.nombre);
            empresas.push(empresa);
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