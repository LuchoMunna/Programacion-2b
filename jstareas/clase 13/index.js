let promesa = new Promise (function (resolve, reject){
    if(true){
        resolve("la promesa finalizo correctamente");
    }
    else {
        reject("ha ocurrido un problema");
    }
})

promesa.then(function(response){
    console.log("respuesta" + response)
})

promesa
.then(value => console.log(value)) // devuelve una promesa sino la pasa al siguiente then el valor de resolucion viene del resolve
.catch(err => console.log(err)) // catch captura el error de cualquier promesa este valor viene del reject
//respuesta: la promesa finalizo correctamente
