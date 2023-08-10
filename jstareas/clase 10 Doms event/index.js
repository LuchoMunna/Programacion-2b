// DOM EVENTOS
// window.addEventListener ("click",()=> {
//   console.log("click detectado");
// })
/*
window.addEventListener("click", () => {
    console.log("click")
})

*/
//let conteoDeClicks = 0
//let boton = document.getElementById("btn");

//boton.addEventListener("click",(e) => {
    //boton.addEventListener("click",(e) => {
    //e.target()
    //e.preventDefault()
    //e.stopPropagation()
   // conteoDeClicks++;
    //console.log(conteoDeClicks);
 //});


// on  solo permite 1 callback vs addeventlistener permite varios

//boton.onclick(() => {
    
//})


//event.key (que tecla toque)

const txtbox = document.querySelector("#textbox");

const output = document.querySelector ("div");

txtbox.addEventListener("keydown", (event) => {
    output.textContent = `se apreto "${event.key}".` //alt 96 hace el ` para insertar js


    console.log(output)
    console.log(event.key)
}) 


// se lanza el evento submit cuando se apreta el boton enviar en un form

const form = document.querySelector("form")
const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const dev = document.querySelector("p")

form.addEventListener("submit", (e) =>{
    if (nombre.value === "" || apellido === ""){
        e.preventDefault(); // detiene el envio del formulario y muestra un mensaje de
                            // error en el parrafo de abajo
                            // para hacerle saber al usuario / cliente cual es el problema
    dev.textContent = "Faltan completar campos";
    }
    
})