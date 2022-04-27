/* Paciente*/
class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }
    get getnombrePaciente(){
        return this.nombre
    }
    get getRut(){
        return this.rut
    }
    get getEdad(){
        return this.edad
    }
    get getDiagnostico(){
        return this.diagnostico
    }
}

/* Consultorio*/
class Consultorio {
    constructor(nombre) {
        this.nombre = nombre;
        this.paciente = [];
    }
    get getPaciente() {
        return this.paciente;
    }
    set setPaciente(paciente) {
        this.paciente.push(paciente);
    }
}

/*PROTOTYPE*/
Consultorio.prototype.buscarPaciente = function (nombre) {
    return this.paciente.find((p) =>p.nombre.toLowerCase() === nombre.toLowerCase() || "no se encontro paciente");
};

Consultorio.prototype.buscarRut = function (rut) {
return this.paciente.find((r) => r.rut === rut || "no se encontro rut");
};

Consultorio.prototype.mostrarTodos = function () {
this.paciente.forEach((p) => {
    console.log(p);
});
};

const centroMedico = new Consultorio("Centro Medico");

const usuario1 = new Paciente("Pia Santander","28", 187375495,"gripe amarilla");
const usuario2 = new Paciente("Roberto Carlos", "55", 62345644, "Lepra");

centroMedico.setPaciente = usuario1;
centroMedico.setPaciente = usuario2;

console.log(centroMedico);