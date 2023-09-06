const lista = document.querySelector('#lista');

let comida1 = {nombre:'pizza',
img: 'https://www.thecountrycook.net/wp-content/uploads/2022/05/thumbnail-Smoked-Pepperoni-Pizza-200x200.jpg',
precio:'3000',
sabor:'muzzarella'};

let comida2 = {nombre:'hamburguesa',
img: 'https://www.abc.com.py/resizer/VIzsRiSrgiQRtc6AI1TszUeEgDc=/fit-in/770x495/smart/filters:format(webp)/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/FJQXM5JUU5FFHDDCNZLOSDZGSY.jpg',
precio:'4200',
sabor:'extracheddar'};

let comida3 = {nombre:'pasta',
img: 'https://www.elizabethskitchendiary.co.uk/wp-content/uploads/2016/09/Chilli-Spaghetti-200x200.jpg',
precio:'3300',
sabor:'bolognesa'};

let comida4 = {nombre:'empanadas',
img: 'https://biencasero.clarin.com/advf/imagenes/4cac8b02ef1cf_200x200.jpg',
precio:'5100',
sabor:'pollo'};

let comida5 = {nombre:'tacos',
img: 'https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2023/02/tacos-recipe-16-2.jpg?fit=200%2C200&ssl=1',
precio:'4900',
sabor:'picante'};

const food = [comida1, comida2, comida3, comida4, comida5];

const carrito = [];

food.forEach((comida, index) => {

    const list = document.createElement('div');
    list.classList.add('card');
    list.innerHTML =` <div>
    <img src = ${comida.img} class="card-img-top">
    <div class="card-body"> 
    <h5 class="card-title">${comida.nombre}</h5>
    <p>${comida.precio}</p>
    <p>${comida.sabor}</p>
    <button class="btn btn-primary">Agregar al carrito</button>
    </div>
    </div>`

    lista.appendChild(list);
    
    const boton = list.querySelectorAll(".btn")
    boton.addEventListener('click', (e) =>{
    carrito.push(food[index])
    e.stopPropagation();
    console.log(carrito); 
    });
});

