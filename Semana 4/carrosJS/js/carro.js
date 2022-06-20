export class Carro {
    constructor(pimgSrc) {
        this.img = document.createElement('img');
        document.body.appendChild(this.img);
        this.img.src = pimgSrc;
        this.img.onclick = this.cambiarImagen.bind(this);
    }

    cambiarImagen() {
        this.img.src = "images/rojo.png";
    }
}