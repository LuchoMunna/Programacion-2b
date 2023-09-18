const productos = [
  // ... (los datos de los productos se mantienen iguales)
];

const carrito = [];
const lista = document.querySelector("#lista");
const carritoLista = document.querySelector("#carritoLista");
const total = document.querySelector("#total");

productos.forEach(item => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("item");
    divProducto.innerHTML = `
    <div class="item-head">
    <h3>${item.nombre}</h3>
    <span>$${item.precio}</span>
    </div>
    <img class="imagen" src="${item.imagen}" alt="${item.nombre}">
    <button class="addBtn">Agregar al carrito</button>
    `;
    lista.appendChild(divProducto);

    const addBtn = divProducto.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
        carrito.push(item);
        mostrarCarrito();
    });
});

const mostrarCarrito = () => {
    carritoLista.innerHTML = "";
    carrito.forEach((item, index) => {
        const divCarrito = document.createElement("div");
        divCarrito.innerHTML = `
        <span>${item.nombre} $${item.precio}</span>
        <button class="removeBtn" data-index="${index}">Quitar</button>
        `;
        carritoLista.appendChild(divCarrito);

        const quitar = divCarrito.querySelector(".removeBtn");
        quitar.addEventListener("click", () => {
            const index = quitar.getAttribute("data-index");
            removeCarrito(index);
        });
    });

    total.innerHTML = `TOTAL: $${calcularTotal()}`;
};

const calcularTotal = () => {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio;
    });
    return total;
};

const removeCarrito = (index) => {
    carrito.splice(index, 1);
    mostrarCarrito();
};
