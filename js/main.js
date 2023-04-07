const carro = document.querySelector(".contenedorCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let productos = [];
fetch("../js/data.json")
.then(response => response.json())
.then (data =>{
  productos = data;
  mostrarProductos(productos);
})

// Función para mostrar los productos en la página
   function mostrarProductos(){
    productos.forEach((producto) => {
    const precioConIVA = producto.precio * 1.21;
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
//mostrarProductos();


function agregarAlCarrito(prodId) {
  const item = productos.find((prod) => prod.id === prodId);

  const existe = carrito.some((p) => p.id === prodId);

  const prodAlCarrito = {
    id: item.id,
    nombre: item.nombre,
    precio: item.precio,
    precioconIVA: item.precioConIva,
    imagen: item.imagen,
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
