//localStorage.setItem("parametro", "valor")
//localStorage.setItem("nombre", "lucho");
//todo lo devuelve como string
//const usuario = localStorage.getItem("nombre");
//lucho
//localStorage.removeItem("nombre")
//remueve un item
//sessionStorage.setItem("nombre", "luis")
// solo lo guarda hasta que se cierre las pestaña
//localStorage.clear(); // borra todo

const loguinBtn = document.querySelector("#submit")
const formuser = document.querySelector("#formuser")
const savebtn = document.querySelector("#saveBtn")

loguinBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let usuario = document.querySelector ("#nombre").value
    let contra = document.querySelector ("#userpassword").value

    if (usuario == "luis" && contra == "1997"){
        localStorage.setItem("user", usuario)
        location.reload() //se actualiza para grabar el item
    }

    else{
        alert("Usuario o contra incorrecto, le pifiaste papu")
    }
})


const user = localStorage.getItem("user");

if (user == null){
    console.log("Primero logueate rey")
    formuser.classList.add("hide")
}

else{

    loguinBtn.classList.add("hide");
    const logoutbtn = document.createElement("button")
    logoutbtn.innerText = "Cerrame la sesion"
    logoutbtn.classList.add("submit")


    logoutbtn.addEventListener("click", (e) => {
        localStorage.removeItem("user")
        location.reload()
    })
    const login = document.getElementById("login")
    login.appendChild(logoutbtn)


}

let userinfo = JSON.parse(localStorage.getItem("userinfo"))
if(userinfo) {
    document.getElementById("nombres").value = userinfo.nombre
    document.getElementById("apellido").value = userinfo.apellido
    document.getElementById("dni").value = userinfo.dni
    document.getElementById("date").value = userinfo.date
    document.getElementById("hobbie").value = userinfo.hobbie


}

const guardarinfo = () =>{
    let nombre = document.getElementById("nombres").value
    let apellido = document.getElementById("apellido").value
    let dni = document.getElementById("dni").value
    let date = document.getElementById("date").value
    let hobbie = document.getElementById("hobbie").value

    let userobject = {nombre, apellido, dni, date, hobbie}

    localStorage.setItem("userinfo", JSON.stringify(userobject))
}

savebtn.addEventListener("click", (e) =>{
    e.preventDefault
    guardarinfo()
})


/* 
let obj= {
    nombre: "luis",
    edad: 33,
    apellido: "munna"
}
*/
//si pasa a json osea cada una de las claves
/* 
let obj= {
    "nombre": "luis",
    "edad": 33,
    "apellido":"munna"
}


let obj= {
    nombre: "luis",
    edad: 33,
    apellido: "munna"
}

JSON.stringify(obj)

let objjason = JSON.stringify(obj)

JSON.parse(objjason)

*/