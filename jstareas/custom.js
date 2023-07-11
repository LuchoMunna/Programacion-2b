console.log("Lucho");
console.log(5 + 5);
console.log( 5==6 );
document.write("holas");

const nombre="lucho";
const edad="26";

console.log(nombre + " " + edad);





function horizontal(){
    console.log(document.getElementsByClassName("cajas")[0].classList)
    document.getElementsByClassName('cajas')[0].className += " cajas2";
    console.log(document.getElementsByClassName("cajas")[0].classList)
}

function vertical(){
    console.log(document.getElementsByClassName("cajas")[0].classList)
    document.getElementsByClassName('cajas')[0].className -= " cajas2";
}