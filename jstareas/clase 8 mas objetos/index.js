

const v1 = {
    nRuedas: 4,
    color: "naranja"
}

//funcion

function v2(nRuedas, color){
    this.nRuedas = nRuedas;
    this.color = color;
}


//clase 
class Vehiculo{
    constructor(nRuedas, color) {
        this.nRuedas = nRuedas;
        this.color = color;
    }

    get nRuedas() {
        return this.nRuedas;
    }

    get color () {
        return this.color;
    }

    set color(nuevocolor) {
        this.color = nuevocolor;
    }

    avanzar () {
        console.log("vehiculo avanzando");
    }

    avanzar () {
        console.log ("segundo avanzar");
    }

    // 1) nombre 2) parametro 3) tipo de  variable
}

// crear una tarea 

class Auto extends Vehiculo { // la clase auto es hija de vehiculo, hereda todo de auto
    constructor (color, patente, puertas) {
        super (4, color); // super utiliza el constructor ed la clase madre
        this.patente = patente;
        this.puertas = puertas;
    }

    get patente() {
        return this.patente;
    }

    get puertas() {
        return this.puertas;
    }
}


class Tarea {
    constructor (idTarea, titulo, fechaCreadas) {
        this.idTarea = idTarea;
        this.titulo = titulo;
        this.completada = false;
        this.fechaCreadas = fechaCreadas;
    }

    completar () {
        this.completada = true;
    }

    idTarea () {
        return this.idTarea;
    }

    completada () {
        return this.completada;
    }

    titulo () {
        return this.titulo;
    }

    fechaCreadas () {
        return this.fechaCreadas;
    }
}

const tarea1 = new Tarea (1, "barrer", "03/08/2023")
const tarea2 = new Tarea (2, "lavar platos", "04/08/2023")
const tarea3 = new Tarea (3, "sacar basura", "05/08/2023")

tarea1.completar ();

console.log(tarea1.completada);

const tareas = [tarea1, tarea2, tarea3];

const fiesta = new Auto ("negro", "FH498", 5);

fiesta.avanzar(30);
console.log(fiesta.nRuedas + " " + fiesta.puertas);