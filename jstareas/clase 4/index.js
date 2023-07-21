//WHILE

var contador=0


while(contador < 10){
    console.log(contador);
    contador++;
}

/*
for(let i=0;i<10;i++){
    console.log(contador);
}

console.log("aca termina")
*/

var contador=0
var flag=true;

while(contador < 10 && flag == true){
    console.log(contador);
    contador++;

    if(contador==6){
        flag=false
    }
}

let contador=0

while(contador <= 10){


    if(contador == 6){
        contador++
        continue;
    }
    console.log(contador);
    contador++;

    if (contador==9){
        break;
    }
}


//continue: interrumpe el flujo del cyclo actual para ir al siguiente

//break: rompe el flujo y lo termina



//tarea


clave= "12345"
ingreso = prompt ("Ingrese clave");

while (ingreso != clave) 
    ingreso = prompt("CLAVE INCORRECTA, REPITA NUEVAMENTE");
    
alert("Password Correcta");



//switch

const estacion = prompt("ingresa estacion")


switch(estacion){
    case "invierno":
        console.log ("hace frio");
        break;
    case "verano":
        console.log("hace calor");
        break;
    default:
    console.log ("lo ingresado no es una estacion...")
}
