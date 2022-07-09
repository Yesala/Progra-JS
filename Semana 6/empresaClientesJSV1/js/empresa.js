
export class Empresa {
    constructor(nombre, clientes = []) {
        this.nombre = nombre;
        this.clientes = clientes;
    }
}