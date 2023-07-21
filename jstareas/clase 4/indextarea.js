let numero1 = prompt("Tirame un paso, digo un un numero")
let numero2 = prompt("Daaale meteme otro numerito")
let funcion = prompt("Ahora que hacemo: suma, resta, division, multiplicacion")

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

switch(funcion){
    case "suma":
        console.log(numero1 += numero2)
        break;
    case "resta":
        console.log(numero1 - numero2)
        break;
    case "division":
        console.log(numero1 / numero2)
        break;
    case "multiplicacion":
        console.log(numero1 * numero2)
        break;
}