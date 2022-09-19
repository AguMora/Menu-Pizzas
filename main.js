const pizzas = [
    {
        id: 1, 
        nombre: "Muzzarela",
        src: "assets/muzarella.png",
        precio: 980,
    },
    {
        id: 2, 
        nombre: "Especial con huevo",
        src: "assets/huevo.png",
        precio: 1050,
    },
    {
        id: 3, 
        nombre: "Rucula y Crudo",
        src: "assets/rucula.png",
        precio: 1200,
    },
    {
        id: 4, 
        nombre: "Roquefort",
        src: "assets/roquefort.png",
        precio: 1160,
    },
    {
        id: 5, 
        nombre: "Fugazzeta",
        src: "assets/fugazzeta.png",
        precio: 1020,
    },
    {
        id: 6, 
        nombre: "De la Casa",
        src: "assets/de-la-casa.png",
        precio: 1220,
    }
];

const input = document.getElementById("number");
const contenedor = document.getElementById("contenedor");
const btn = document.getElementById("btn");
const info = document.getElementById("info");

localStorage.setItem("pizzasLocal", JSON.stringify(pizzas));

const findPizza = () => {
    const valor = input.value.trim();
    if (!valor) {
        mostrarError(valor);
        return;
    }
    const pizzaMenu = pizzas.find(pizza => pizza.id == valor)
    localStorage.setItem("pizzasLocal",JSON.stringify(pizzaMenu))
    return pizzaMenu;
}

const mostrarError = () => {
    info.innerHTML = 
    `<h2 class="name" id="name">Ingrese un número para iniciar la busqueda</h2>`;
  };


const renderPizza = () => {
     if (!findPizza(pizzas)) {
        info.innerHTML = 
        `<h2 class="name" id="name">No existe un id correspondiente a una pizza, ingrese uno entre 1-6</h2>`;
        return
    }
     else {
        info.innerHTML = 
        `<h2 class="name" id="name">${findPizza(pizzas).nombre}</h2>
        <h3 class="price" id="price">Precio: $${findPizza(pizzas).precio}<h4/>
        <img src=${findPizza(pizzas).src} class="card-img">`
    }
    number.valor= ' ';
}

const eventPizza = (e) => {
    e.preventDefault();
    const valorInput = input.value;
    if (!valorInput) {
        mostrarError(valorInput);
        return;
    }
    const valorPizza = findPizza(Number(valorInput));
    renderPizza(valorPizza);
};


const init = () => {
    btn.addEventListener("click", eventPizza);
};

init ();
