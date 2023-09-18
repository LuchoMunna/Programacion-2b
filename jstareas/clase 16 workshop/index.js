//https://rickandmortyapi.com/
//https://rickandmortyapi.com/api/character

const input = document.querySelector('#searchBar');
const button = document.querySelector('#buttonSearch')
const container = document.querySelector('#container');

button.addEventListener('click', (e) => {
    e.preventDefault();

    container.innerHTML=""
    
    let personaje = input.value

    if (personaje != "") {
        tomaNombre(personaje)
        .then(function (characters) {
            characters.forEach(function (p) {
                mostrarResultados(p);
            });
        })
        .catch(function (error) {
            console.error(error);
        });
    }
    else {
        alert("ese no es un personaje :P")
    }

})


async function tomaNombre(personaje) {
    const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`
    try{
        const response = await fetch(url)
        if (response.status < 400){
            const info = await response.json()
            input.value = "";
            console.log(info.results)
            return info.results
        }
        else {  
            const error = await response.json()
            alert (error.message)
            input.value
        }
    }
    catch(error){
        console.log(error)
    }
}

const mostrarResultados = (nombre) => {
    let div1 = document.createElement("div")
    div1.innerHTML = 
    `<div id="nombre"><h3> ${nombre.name} </h3></div>
    <div id="imagen"><img src=${nombre.image}></img></div>`

    container.appendChild(div1)

}