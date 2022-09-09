const pizzas = [
    {
        id: 1, 
        nombre: "Muzzarela",
        precio: 980,
    },
    {
        id: 2, 
        nombre: "Especial",
        precio: 1050,
    },
    {
        id: 3, 
        nombre: "Rucula y Jamon crudo",
        precio: 1200,
    },
    {
        id: 4, 
        nombre: "Roquefort",
        precio: 1160,
    },
    {
        id: 5, 
        nombre: "Fugazzeta",
        precio: 1020,
    },
    {
        id: 6, 
        nombre: "A caballo",
        precio: 1220,
    }
];

const input = document.getElementById("number");
const contenedor = document.getElementById("contenedor");
const btn = document.getElementById("btn");
const info = document.getElementById("info");

const renderPizza = () => {
     if (findPizza(pizzas) == undefined) {
        Alert ("Elija una variedad entre 1 y 6");
        return
    }
     else {
        info.innerHTML = 
        `<h2 class="name" id="name">Nombre pizza: ${findPizza(pizzas).nombre}</h2>`
        `<h4 class="price" id="price">Precio: ${findPizza(pizzas).precio}<h4/>`
    }
    number.valor= ' ';
}

const findPizza = () => {
    const valor = input.value;
    const pizzaMenu = pizzas.find(pizzas => pizzas.id = valor)
    return pizzaMenu;
}


// const eventPizza = e => {
//     e.preventDefault(e);
//     const valor = input.value.trim();
// }

const init = () => {
    btn.addEventListener("click", renderPizza);
}

init ();
