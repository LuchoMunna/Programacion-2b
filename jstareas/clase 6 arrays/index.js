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

