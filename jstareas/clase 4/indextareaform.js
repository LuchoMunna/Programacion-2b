
//eventlistener

// let enviar = document.getElementById("enviar");
// const form =document.getElementById("form")

// form.addEventListener("click", function() {
    
//     let numero1 = document.getElementById("numero1").value;
//     console.log(numero1)
// })



//onclick

        let resultado

    function boton () {
        let numero1 =document.getElementById("numero1").value;
        console.log(numero1)
        let numero2 = document.getElementById("numero2").value;
        console.log(numero2)
        const opera = document.getElementById("opera").value;
        console.log(opera)
        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);

        switch(opera){
            case "+":
                resultado = (numero1 + numero2)
                console.log(resultado)
                break;
            case "-":
                resultado = (numero1 - numero2)
                console.log(resultado)
                break;
            case "/":
                resultado = (numero1 / numero2)
                console.log(resultado)
                break;
            case "*":
                resultado = (numero1 * numero2)
                console.log(resultado)
                break;
        }
        document.getElementsByClassName("respuesta")[0].innerHTML = "El resultado es " + resultado;
        
    }
    
    console.log(resultado)