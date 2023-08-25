const lista = document.querySelector("#lista");
const carritoLista = document.querySelector("#carritoLista")

let objeto1 ={
    Producto: "pantalon",
    Precio: 600,
    Imagen: "https://i.pinimg.com/originals/db/22/03/db2203c0b79ce7afa346daf972edab28.png"

};

let objeto2 ={
    Producto: "medias",
    Precio: 350,
    Imagen: "https://i.pinimg.com/originals/db/22/03/db2203c0b79ce7afa346daf972edab28.png"

};

let objeto3 ={
    Producto: "botas",
    Precio: 400,
    Imagen: "https://i.pinimg.com/originals/db/22/03/db2203c0b79ce7afa346daf972edab28.png"

};

let objeto4 ={
    Producto: "remera",
    Precio: 550,
    Imagen: "https://piet.com.ar/wp-content/uploads/piet-remera-negra-cuadrado-blanco-01.jpg"

};

const productos = [objeto1, objeto2, objeto3, objeto4];
const carrito = [];

productos.forEach((producto,index) => {

    const li = document.createElement('div');

    li.classList.add("item");

    li.innerHTML = 
    `<div class="item-head"> 
    <h3>${producto.Producto}</h3> 
    <span>${producto.Precio}</span> 
    </div> 
    <img class="imagen" src=${producto.Imagen}> 
    <button class = "addBtn">Agregar al Carrito</button>`;
    
    lista.appendChild(li)

    const addBtn = li.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
        carrito.push(producto);
        console.log(carrito)

    })

});



/*const agregarCarrito = document.querySelectorAll(".addBtn");

for (let i = 0; i < agregarCarrito.length; i++) {
    agregarCarrito[i].addEventListener("click", (e) => {
        addCarrito(i);
        mostrarCarrito();
    })
}

const addCarrito = (i) => {
    carrito.push(productos[i])
}
*/