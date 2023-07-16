var nombre;
var nombre2;
var apellido;
var apellido2;
var edad;
var edad2;




nombre=prompt("Ingrese nombre de la primera persona")
nombre2=prompt("Ingrese nombre de la segunda persona")
apellido=prompt("Ingrese apellido de la primer persona")
apellido2=prompt("Ingrese apellido de la segunda persona")
edad=prompt("Ingrese edad de la priemr persona")
edad2=prompt("Ingrese edad de la segunda persona")


if (apellido == apellido2){
    document.getElementsByClassName("respuesta")[0].innerHTML="Podrian ser parientes";
}