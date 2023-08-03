const tomas = {
    nombre: "tomas",
    apellido: "t2",
    edad: 21,
}


function Persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}

const ivan = new Persona ("ivan", "lopez", 26)
const lautaro = new Persona ("lautaro", "martinez", 24)

class Persona {
    // atributos


    //constructor
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //metodos fullname method
    get fullname(){
        return this.nombre + " " + this.apellido;
    }

    esMayor(){
        return this.edad >=18
    }
    
}

const jesus = new Persona ("juan", "martinez", 24)
const matias = new Persona ("matias", "martinez", 27)

matias.esMayorque (jesus);


// EJERCICIO

class Perro {
    constructor (raza, color, edad, estadoDeAdopcion) {
        this.raza = raza;
        this.color = color;
        this.edad = edad;
        this.estadoDeAdopcion = estadoDeAdopcion;
    }

    get informarEstado(){
        return this.estadoDeAdopcion
    }

    set modificarEstado(nuevoEstado){
        this.estadoDeAdopcion = nuevoEstado;   
    }
}