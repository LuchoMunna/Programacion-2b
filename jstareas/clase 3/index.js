//for permite hacer ciclos

/*for (variable a inspeccionar; condicion de ciclo; accion-post-ciclo; ){
 //aca codigo a repetir determinadas veces
}*/




//lenght largo del string, cantidad de elementos del array

/*for(let i = 0; i < 5; i++){
    console.log(i);
}

let texto = prompt("diga su nombre")    

for(let i=0; i < texto.length;i++){
    console.log(texto[i])
}
*/


const comidas = ["milanesa","hamburguesa","pizza","papas fritas"];

let i;
var texto="";

for(i=0; i < comidas.length; i++){
    texto+= comidas[i] + "<br>";
}

document.getElementById("comidas").innerHTML = texto


var menu=[];

for(let i=0;i<6;i++){
    // agregar un elemento a un array o lista (push)
    menu.push(prompt("agregue una comida"));
}

