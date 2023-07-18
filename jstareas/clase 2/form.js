
let nombre=prompt("Ingrese nombre de la primera persona")
let apellido=prompt("Ingrese apellido de la primer persona")
let edad=prompt("Ingrese edad de la priemr persona")
let nombre2=prompt("Ingrese nombre de la segunda persona")
let apellido2=prompt("Ingrese apellido de la segunda persona")
let edad2=prompt("Ingrese edad de la segunda persona")


if (nombre == nombre2 && edad == edad2 && apellido == apellido2){
    document.getElementsByClassName("respuesta")[0].innerHTML = "Son la misma persona";
}

else if (apellido == apellido2){
    document.getElementsByClassName("respuesta")[0].innerHTML = "Podrian ser parientes";
}

else if(edad == edad2){
    document.getElementsByClassName("respuesta")[0].innerHTML = "Tienen la misma edad";
}

else {
    document.getElementsByClassName("respuesta")[0].innerHTML = "Son personas diferentes";
}

console.log(nombre,nombre2,apellido,apellido2,edad,edad2)