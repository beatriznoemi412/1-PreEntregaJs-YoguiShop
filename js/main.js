const carro = document.querySelector(".contenedorCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Uso promesas y asincronía para carga archivoJSON de forma asincrónica y que "mostrarProductos" se ejecute después que los datos se hayan cargado.
let productos = [];
async function cargarProductos() {
  const response = await fetch("../js/data.json");
  const data = await response.json();
  productos = data;
  mostrarProductos(productos);
}

cargarProductos();

// Función para mostrar los productos en la página
function mostrarProductos() {
  productos.forEach((producto) => {
    const precioConIVA = (producto.precio * 1.21).toFixed(2);
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.id = `${producto.id}`;
    tarjeta.innerHTML = `<h5 class="card-header">${producto.nombre}</5>
    <img src= "${producto.imagen}" class="card-img-top imagenProducto">
<div class="card-body">   
    <p class="card-text">${producto.descripcionCorta}</p>       
    <p class="card-text">${producto.descripcion}</p> 
    <p class="btn" id="precio">$ ${producto.precio}</p>
    <p class="btn" id="precioIVA"> precio con IVA: $ ${precioConIVA}</p>
    <p class="productoAgregar" id="agregar${producto.id}">agregar</p>
     </div>`;

    //AGREGO TARJETA A PAGINA
    carro.append(tarjeta);

    const botonAgregar = document.getElementById(`agregar${producto.id}`);
    botonAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
}
// Llamar a la función mostrarProductos para que se ejecuten las operaciones

function agregarAlCarrito(prodId) {
  const item = productos.find((prod) => prod.id === prodId);

  const existe = carrito.some((p) => p.id === prodId);

  //uso de desestructuracion para acceder a las propiedades de objeto
  const { id, nombre, precio, precioConIva, imagen } = item;
  const prodAlCarrito = {
    id,
    nombre,
    precio,
    precioconIVA: precioConIva,
    imagen,
    cantidad: 1,
  };
  if (existe) {
    const indice = carrito.findIndex((p) => p.id === prodId);
    carrito[indice].cantidad++;
    carrito[indice].precioConIVA =
      prodAlCarrito.precio * carrito[indice].cantidad;
    console.log(carrito);
  } else {
    carrito.push(prodAlCarrito);
    console.log(carrito);
  }

  contadorCarrito(); //EN ESTE CASO SE VAN INCORPORANDO LOS PRODUCTOS ELEGIDOS, NO SU CANTIDAD.
  console.log(item);
  saveLocalStorage();
}
//setItem
const saveLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
//getItem
JSON.parse(localStorage.getItem("carrito"));
