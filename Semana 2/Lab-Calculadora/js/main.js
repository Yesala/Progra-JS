"use strict";

function calc() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var oper = document.getElementById('operators').value;

    if (oper === '+') {
        document.getElementById('result').value = n1 + n2;
    }

    if (oper === '-') {
        document.getElementById('result').value = n1 - n2;
    }

    if (oper === '/') {
        document.getElementById('result').value = n1 / n2;
    }

    if (oper === 'x') {
        document.getElementById('result').value = n1 * n2;
    }
}

function clr() {
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    document.getElementById("result").value = ""
}