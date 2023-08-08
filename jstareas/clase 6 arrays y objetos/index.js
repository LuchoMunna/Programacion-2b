//arrays

//arrays son listas de elementos

//array primitivo
let pelis = ["batman","harry potter", "el señor de los anillos"];

//array  como CLASE

let colores = new Array("batman2", "harry potter 2", "el señor de los anillos 2");

//CLASE SIEMPRE EMPIEZAN CON MAYUSCULA

// clase: molde, plantilla, conjunto matriz de atributos, metodos y constructores, significa que tiene caracteristicas.
//la clase tiene un nombre reservado y lo llamamos con un NEW para usar su constructor

//objeto: es una instancia de la clase. Cuando llenamos ese "molde" (clase), resulta
//un objeto. un objeto es construido a PARTIR de una clase
//una clase es mas maleable

console.log(pelis);

console.log(colores);

console.log(pelis.length); //cuantos items tiene un array

console.log(colores.lenght());

colores.forEach(funcion);

const funcion = (peli) => {
    console.log(peli)
}

pelis.forEach(function(peli,index){
    console.log("peli ", index + ": " + peli);
})

//array  cajas : caja 

//añadir elemento a un array 

pelis.push("harry potter 3"); //agrega al final de la lista

//pop elimina el ultimo item de un array

let ultimo = pelis.pop(); // elimina el ultimo de todos y devuelve ese resultado
// si el array esta vacio devuelve undefined

//agregar un elemento al principio de un array

nuevaLongitud = pelis.unshift("el hobbit");

//eliminar primer elemento de array

let primero = pelis.shift();// si el array esta vacio devuelve undefined

// indice del objeto, si encuentra un match devuelve el indice de la posicion (posicion de elemento)
let posicion = pelis.indexOf("el hobbit");

//eliminar unico elemento mediante su posicion

let elementoEliminado = pelis.splice(1, 1);  //(posicion que empiezo, cantidad de argumentos a eliminar)

// si uso (0, pelis.lenght) elimino todo el array

//copiar un array

let arrayCopiado = pelis.slice();

//cantidad de elementos dentro de un array

let cantidad = arrayCopiado.length;

//FOREACH tradicional

const numeros = [45, 4, 10, 15, 16, 1, 25]


// for (elemento in array) ( es un for para arrays )
    for (let numero in numeros){
        if (numero > 10) console.log(numero);
    }




