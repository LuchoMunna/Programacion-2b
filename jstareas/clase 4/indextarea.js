let numero1 = prompt("Tirame un paso, digo un un numero")
let numero2 = prompt("Daaale meteme otro numerito")
let funcion = prompt("Ahora que hacemo: suma, resta, division, multiplicacion")

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

switch(funcion){
    case "suma":
        alert(numero1 += numero2)
        break;
    case "resta":
        alert(numero1 - numero2)
        break;
    case "division":
        alert(numero1 / numero2)
        break;
    case "multiplicacion":
        alert(numero1 * numero2)
        break;
}

// opciones
//parsefloat 
//parselint