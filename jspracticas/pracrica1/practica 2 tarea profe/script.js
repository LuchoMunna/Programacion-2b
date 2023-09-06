const productos = [
  {
    nombre: "Remera",
    precio: 2000,
    imagen: "https://th.bing.com/th/id/R.75578f21c14dc2df861df8755c698cf8?rik=fnGI%2fID3awmlgw&riu=http%3a%2f%2fwww.episyvestuario.com%2fattachments%2fImage%2fCAVARGCGM.jpg%3ftemplate%3dgeneric&ehk=igf3gB4H36VxOJjvmQlxxYqhmiFgXmmbMdGoAL330d8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    nombre: "Camisa",
    precio: 3000,
    imagen: "https://th.bing.com/th/id/OIP.XSRmgHbsuxnx9xsaKi1bjwHaH0?pid=ImgDet&rs=1",
  },
  {
    nombre: "Pantalón",
    precio: 4000,
    imagen: "https://i.pinimg.com/originals/db/22/03/db2203c0b79ce7afa346daf972edab28.png",
  },
  {
    nombre: "Buzo",
    precio: 4500,
    imagen: "https://th.bing.com/th/id/R.45b95500bf914109e65e33ee0390657f?rik=7LFRj5ORzmwlnA&riu=http%3a%2f%2fblog-imgs-93.fc2.com%2fb%2fe%2fr%2fberberjin%2f5-d_20160929184755753.jpg&ehk=L5GEyPwHP1ipuAXJybFi3FZ8EoMNkNoqjDZMZEQvu7Q%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    nombre: "Campera",
    precio: 9000,
    imagen: "https://th.bing.com/th/id/OIP.TVQ3p__NHTFPaUyOsbLDigAAAA?pid=ImgDet&rs=1",
  },
];

const carrito = [];

const lista = document.querySelector("#lista");

productos.forEach(item => {
    const divProducto = document.createElement("div")
    divProducto.classList.add("item")
    divProducto.innerHTML = `
    <div class="item-head">
    <h3>${item.nombre}</h3>
    <span>$${item.precio}</span>
    </div>
    <img class="imagen" src=${item.imagen} alt="${item.nombre}">
    <button class="addBtn">Agregar al carrito</button>
    `
    lista.appendChild(divProducto)

    //Alternativa más corta que realizó un compañero
    const addBtn = divProducto.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
            carrito.push(item)
            mostrarCarrito()
    })
});

//Otra opción para agregar el evento a cada botón
// const agregarCarrito = document.querySelectorAll(".addBtn");

// for (let i = 0; i < agregarCarrito.length; i++) {
//     agregarCarrito[i].addEventListener("click", (e) => {
//         addCarrito(i);
//         mostrarCarrito();
//     })
// }

// const addCarrito = (i) => {
//     carrito.push(productos[i])
// }

const carritoLista = document.querySelector("#carritoLista");

const mostrarCarrito = () => {
  carritoLista.innerHTML = "";
  carrito.forEach((item) => {
    const divCarrito = document.createElement("div");
    divCarrito.innerHTML = `
    <span>${item.nombre} $${item.precio}</span>
    <button class="removeBtn">Quitar</button>
    `;
    carritoLista.appendChild(divCarrito);

    const quitar = divCarrito.querySelector(".removeBtn")
    quitar.addEventListener("click", () => {
      removeCarrito(item)
    })
  });

  const total = document.createElement("h3");
  total.innerHTML = `TOTAL: $${calcularTotal()}`
  carritoLista.appendChild(total);

  //Otra opción para agregar el evento a cada botón
  // const quitar = document.querySelectorAll(".removeBtn");
  // for (let i = 0; i < quitar.length; i++) {
  //   quitar[i].addEventListener("click", (e) => {
  //     removeCarrito(i);
  //   })
  // }
};

const calcularTotal = () => {
    let total = 0;
    for(let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio
    }
    return total
}

const removeCarrito = (i) => {
    carrito.splice(i, 1);
    mostrarCarrito();
}

