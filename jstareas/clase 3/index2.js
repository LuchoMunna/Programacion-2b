/*var numeros=[]

for(var i=0; i<=3;i++){
    numeros.push(prompt("agrega un numerito"))
    console.log(numeros,i)
}

for(numeros=0;i<=50;numeros[0]*numeros[1]){
    console.log(numeros)
}
*/


/* numero multiplicado x i
for(let i=0; i<=3; i++){
    let number = prompt("escribi un num")
    document.write(`${number}x${i}=${number*i} <br>`)
    
}
*/

//otra forma

let resultado =1;

for(let i=0;i< 4;i++){
    let numero = prompt("ingresa numero");
    resultado *= numero;  //== resultado = resultado * numeros[i]

    console.log(resultado);
}

console.log("el resultado final es "+ resultado)


/*
document.getElementsByName("nombre")[0].value;
document.getElementById("nombre");

funcion();{

document.getElementsByName("nombre")[0].value;
document.getElementById("nombre");
};
*/