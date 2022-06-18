"use strict";
window.onload = init;

function init(){
    var calcBtn = document.getElementById('calcBtn');
    var clearBtn = document.getElementById('clearBtn');
    var result = document.getElementById('result');
    var operSlt = document.getElementById('operators');

    clearBtn.onclick = onClr;
    calcBtn.onclick = onCalc;

    function onCalc() {
        var n1 = parseFloat(document.getElementById('n1').value);
        var n2 = parseFloat(document.getElementById('n2').value);
        var oper = operSlt.value;
    
        if (oper === '+') {
            result.value = n1 + n2;
        }
    
        if (oper === '-') {
            result.value = n1 - n2;
        }
    
        if (oper === '/') {
            result.value = n1 / n2;
        }
    
        if (oper === 'x') {
            result.value = n1 * n2;
        }
    }
    
    function onClr() {
        document.getElementById("n1").value = ""
        document.getElementById("n2").value = ""
        result.value = ""
    }
}