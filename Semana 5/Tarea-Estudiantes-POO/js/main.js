"use strict";

import { Persona } from './persona.js';

window.addEventListener('load', init, false);

function init() {
    var nombreIn = document.getElementById('nombreIn');
    var apellidoIn = document.getElementById('apellidoIn');
    var notaIn = document.getElementById('notaIn');
    var emailIn = document.getElementById('emailIn');
    var registrarBtn = document.getElementById('registrarBtn');
    var estudiantesTbl = document.getElementById("tableEstudiantes");
    var table = document.getElementById('datas');
    var eliminarBtn = document.getElementById('eliminarBtn');

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
    registrarBtn.onclick = onRegistrarBtn;

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
            llenarEstudiantesTbl();
        }
    }

    function llenarEstudiantesTbl() {
        table.innerHTML = '';
        var tr = '';
        let btnDel = document.createElement("button");
        btnDel.innerText = "Eliminar";
        btnDel.setAttribute('id', 'eliminarBtn');

        estudiantes.forEach(x => {
            tr += '<tr>';
            tr += '<td>' + x.nombre + '</td>' + '<td>' + x.apellido + '</td>' + '<td>'
                + x.email + '</td>' + '<td>' + x.nota + '</td>';
            tr += '<td>'+ '' +'</td>';
            tr += '</tr>';
        });

        table.innerHTML += tr;
    }
        //CODIGO 2 CREAR TABLA:
        //     var tbl = document.createElement("table");
        //     var tblBody = document.createElement("tbody");

        //     var eliminarBtn = document.createElement('button');
        //     eliminarBtn.innerText = 'Eliminar';

        //     for (let i = 0; i < estudiantes.length; i++) {
        //         var row = document.createElement("tr");

        //         for (let j = 0; j < 5; j++) {
        //             var cell = document.createElement("td");
        //             var cellText = document.createTextNode('text');
        //             cell.appendChild(cellText);
        //             row.appendChild(cell);
        //         }
        //         tblBody.appendChild(row);
        //     }
        //     tbl.appendChild(tblBody);
        //     document.body.appendChild(tbl);
        // }

    function onEliminarBtn() {
        var email = table.value;
        estudiantes.forEach((persona, i) => {
            if (email === persona.email) {
                estudiantes.splice(i, 1);
                window.localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
                cargarDesdeLocalStorage();
                llenarEstudiantesTbl();
            }
        });
    }

    function onEliminarTd(event) {
        console.log(event.target);//td
        console.log(event.target.email);//print el de la pesona

        // const buttons = document.getElementsById('eliminarBtn');
        // for (let i = 0; i < buttons.length; ++i) {
        //     buttons[i].onclick = function (event) {
        //         document.getElementsByClassName("eliminar-" + event.currentTarget.id[event.currentTarget.id.length - 1])[0].innerHTML = "";
        //     }
        // }
    }

    function limpiar() {
        nombreIn.value = '';
        apellidoIn.value = '';
        notaIn.value = '';
        emailIn.value = '';
    }

    function cargarDesdeLocalStorage() {
        var dataSerializada = window.localStorage.getItem('estudiantes');
        var data = JSON.parse(dataSerializada);
        estudiantes = [];
        data.forEach(function (personaData) {
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
