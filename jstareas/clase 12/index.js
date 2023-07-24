//Script de callback
//Crear una función llamada “calc” que recibe 2 parámetros,
// el primero un número entero el segundo una función que 
//la utilizaremos como callback.
//Mostrar los siguientes console.log dentro de cada función:
//Hola calc
//Hola callback


let calc = (p1,p2) => {
    console.log("hola calc");

    p2(p1);

}

function resultado() {
    console.log("hola callback")
    console.log("El numero es " + p1)
}

calc(20, resultado);