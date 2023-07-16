//console.log("Lucho");
//console.log(5 + 5);
//console.log( 5==6 );
//document.write("holas");

//const nombre="lucho";
//const edad="26";

//console.log(nombre + " " + edad);





function horizontal(){
    //console.log(document.getElementsByClassName("cajas")[0].classList) checkea clases
    document.getElementsByClassName('cajas')[0].classList.add ("cajas2");
    document.getElementsByClassName('cajas')[0].classList.remove("nocajas");
    console.log(document.getElementsByClassName("cajas")[0].classList)
}

function vertical(){
    
    document.getElementsByClassName('cajas')[0].classList.remove("cajas2");
    document.getElementsByClassName('cajas')[0].classList.remove("nocajas");
    console.log(document.getElementsByClassName("cajas")[0].classList)
} 

function invisible(){
    document.getElementsByClassName('cajas')[0].classList.add("nocajas")

}



var edad = prompt("Cuantos años tenes")