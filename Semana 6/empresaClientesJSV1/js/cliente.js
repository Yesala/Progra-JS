import { Persona } from "./persona.js";

export class Cliente extends Persona {
    constructor(nombre, apellido, fondos, mensualidad, email) {
        super(nombre, apellido, email);
        this.tieneFondosSuficientes = true;
        this.fondos = fondos;
        this.mensualidad = mensualidad;
    }
}