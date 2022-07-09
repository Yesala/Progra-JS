export class Persona {
    constructor(pnombre, papellido, pnota, pemail) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.nota = pnota;
        this.email = pemail;
    }

    aprobar() {
        return this.nota >= 80 ? 'Aprobado' : 'Reprobado';
    }

    constructorFromData(data) {
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.nota = data.nota;
        this.email = data.email;
    }
}