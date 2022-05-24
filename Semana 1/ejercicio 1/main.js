window.onload = function () {

    var precioBrutoInput = document.getElementById('precioBrutoInput');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    calcularBtn.onclick = onCalcularBtn;

    function onCalcularBtn() {
        //Algoritmo de calcular precio Neto
        var precioNeto = 0; //con los impuestos
        var precioBruto = Number(precioBrutoInput.value);
        var impuesto = 13;
        var impuestoACobrar = precioBruto * (impuesto / 100);
        precioNeto = precioBruto + impuestoACobrar;
        console.log('Total: ' + precioNeto);
        resultadoLbl.innerHTML = 'Total:' + precioNeto;
    }
}