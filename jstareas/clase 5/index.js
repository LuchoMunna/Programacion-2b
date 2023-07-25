// casi siempre declaramos una funcion con const

// functions


function decirHolaA() {
    console.log("hola");
}

const decirHolaB = () => console.log("hola"); //sin llaves porque es una sola linea



decirHolaA();

decirHolaB();

//multiplico y devuelvo
function multiplicarA (num1, num2) {
    return num1*num2;  //return (devolucion de la fujncion)
}

let resultado = multiplicarA(4,5);
console.log(resultado);

//console.log(multiplicarA(4,5))  otra opcion


const multiplicarB = (num1, num2) => num1 * num2  //una sola linea unicamente sin llave ni return
                                                  // ya sabe que hay que devolver o retornar
console.log(multiplicarB(5,4))


const multiplicarPor2 = num => num*2; // si hay un solo parametro no hace falta parentesis

// FUNCTIONS DE ORDEN SUPERIOR

function mayorQue(n) {
    return m => m > n;  //retorno M si y solo si M es mayor que N
                        //
}

let mayorQue10 = mayorQue(10);

cosole.log(mayorQue10(11));

//true


// UN OBJETO ES UN GRUPO DE CARACTERISTICAS PROPIEDADES Y FUNCIONES

//atributos (caracteristicas)
const auto = {
    marca: "fiat",
    modelo: "500",
    color: "blanco",
    patente: "adf345"
}

const persona = {
    dni: "12345678",
    nacimiento: "1997",
    nombre: "juan",
    apellido: "mariano"

}

//array de objetos
const objetos = [auto, persona];


console.log(objetos[0].color)   //0 es el auto proque es el primer objeto
console.log("hola " + persona.nombre + " " + persona.apellido);
console.log(auto.apellido) // error porque no esta definido

// % resto de division   2 == 0, el resto de la division   el % significa que va a dar un resto, significa que el numero es par porque lo dividiste por 2 y dio 0

//16 % 16 == 1 => false porque es el resto, 1 resultado, 0 resto

const edadEsPar = (objetoPersona) =>{ //objetoPersona es el nombre de un objeto
    return (2023 - objetoPersona.nacimiento) % 2 == 0;
}

console.log(edadEsPar(persona));