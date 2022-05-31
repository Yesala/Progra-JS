/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

window.addEventListener('load', init, false);

function init() {
    console.log('App running!');
    //1. Declare variables
    //2. Initialize variables
    //3. Events
    //4. Program Logic
    var ingresar = false;
    var num1 = 4;
    var num2 = 4;
    var num3 = 6;

    // var result1 = num1 === num2;
    // var result2 = num2 === num3;
    // var result3 = num1 === num3;
    //var result = result1 && result2 && result3;
    // var result = (num1 === num2) && (num2 === num3) && (num1 === num3);

    // if ((num1 === num2) &&
    //     (num2 === num3) &&
    //     (num1 === num3)) {
    //     console.log('Los numeros son iguales');
    // } else {
    //     console.log('Los numeros no son iguales');
    // }

    var result1 = num1 >= num2;
    var result2 = num1 >= num3;
    ingresar = result1 && result2;

    // if (ingresar) {
    if (result1 && (num1 >= num3)) {
        console.log('num1 es mayor o igual a num2');
    } else {
        console.log('num1 no es mayor a num2');
    }
}