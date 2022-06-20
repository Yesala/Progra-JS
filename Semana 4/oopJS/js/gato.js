class Gato {
    constructor(pnombre, pcolor, ppeso, penergia) {
        this.nombre = pnombre;
        this.color = pcolor;
        this.peso = ppeso;
        this.energia = penergia;
    }

    correr() {
        this.energia -= 1;
        var mensaje = `${this.nombre} estoy corriendo, energia: ${this.energia}`;
        console.log(mensaje);
    }

    brincar() {
        this.energia -= 2;
        var mensaje = `${this.nombre} estoy brincando, energia: ${this.energia}`;
        console.log(mensaje);
    }
}