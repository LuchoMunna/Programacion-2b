// after antes del nodo
// before despues del nodo32

let seccion = document.createElement('section');
console.log(seccion.outerHTML);
document.body.appendChild(seccion)
seccion.prepend

let div1 = document.createElement('div');
seccion.appendChild(div1)
console.log(seccion.outerHTML);

let div2 = document.createElement('div');
seccion.appendChild(div2)
console.log(seccion.outerHTML);

let pe = document.createElement('p');
div2.appendChild(pe);
pe.innerHTML = "Llegue!"
pe.id = "texto"
console.log(seccion.outerHTML);

//Ej) crear una "section" en el "body", con dos hijos "div", y el último "div" tiene un hijo "p" con un texto dentro que diga: llegué!


// after antes del nodo
// before despues del nodo32

let seccions = document.createElement('section');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let pe2 = document.createElement('p');

document.body.appendChild(seccions)
seccions.appendChild(div3)
seccions.appendChild(div4)
div4.appendChild(pe2);
seccions.prepend

pe2.innerHTML = "Llegue recargado!"
pe2.id = "textos"

console.log(seccions.outerHTML);