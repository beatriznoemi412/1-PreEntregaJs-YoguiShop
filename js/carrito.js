const verCarrito = document.getElementById("verCarrito");
const ventanaContainer = document.getElementById("ventanaContainer");
const carritoCantidad = document.getElementById("carritoCantidad");
carrito=[];
verCarrito.addEventListener("click", mostrarCarrito);

// VENTANA DE COMPRA
function mostrarCarrito() {
  ventanaContainer.innerHTML = "";
  ventanaContainer.style.display = "flex";
 //TOTAL COMPRA
  const total = carrito.reduce(
    (acc, { precio, cantidad }) => acc + precio * 1.21 * cantidad,
    0
  );

  const ventanaHeader = document.createElement("div");
  ventanaHeader.className = "ventana-header";
  ventanaHeader.innerHTML = `
    <h1 class=" h2 ventana-header-title"">Carrito</h1>
    <p class="totalCompra">Total:$${total}</p>
    <button id="btnVaciar">Vaciar Carrito</button>
  `;
  ventanaContainer.append(ventanaHeader);

  contadorCarrito.innerText = carrito.length;

//VACIAR CARRITO
  const btnVaciar = document.getElementById("btnVaciar");
  btnVaciar.addEventListener("click", vaciarCarrito);

  //BOTON ESCONDE MODAL DE COMPRA
  const ventanaButton = document.createElement("h1");
  ventanaButton.innerText = "X";
  ventanaButton.className = "ventana-header-button";

  ventanaButton.addEventListener("click", () => {
    ventanaContainer.style.display = "none";
  });
  ventanaHeader.append(ventanaButton);

  carrito.forEach((item) => {
    const precioConIVA = item.precio * 1.21;
    let contenidoCarrito = document.createElement("div");
    contenidoCarrito.className = "ventanaContenedora";
    contenidoCarrito.innerHTML = `
      <img src="${item.imagen}">
      <h3 class="text-light">${item.nombre}</h3>
      <p>${precioConIVA}$</p>
      <p>Cantidad: ${item.cantidad}</p>
      <p>Subtotal: ${item.cantidad * precioConIVA}</p>
      <button class="productoEliminado" id="btnEliminarProducto${item.id}">❌<button>
      
      `;
      ventanaContainer.appendChild(contenidoCarrito);
    //BOTON ELIMINAR PRODUCTO ELEGIDO
    const botonElimina = document.getElementById(
      `btnEliminarProducto${item.id}`);
  
    botonElimina.addEventListener("click", () => {
      eliminarProducto(item.id);
    });
    });
    const DateTime = luxon.DateTime;
      const ahora = DateTime.local();
      ahora.toLocaleString(DateTime.DATE_HUGE);
    
      ventanaContainer.append(ahora);

 //BOTON COMPRAR
     const compraRealizada = document.createElement("button");
  compraRealizada.className = "compra";
  compraRealizada.innerHTML = `comprar`;
  ventanaContainer.append(compraRealizada);
  saveLocalStorage();

  compraRealizada.addEventListener("click", (comprarCarrito) => {
    const enlace = document.querySelector("a[href='compra.html']");
    window.location.assign(enlace.href);
   
  });
  saveLocalStorage();
}
function comprarCarrito(){
  carrito.length = 0;
}
//ELIMINA PRODUCTO ELEGIDO
function eliminarProducto(itemId) {
  const item = carrito.find((item) => item.id === itemId);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
 
  contadorCarrito(); //ME DICE LA EXTENSIÓN DEL CARRITO, EN ESTE CASO SE RESTA PRODUCTO ELEGIDO
  mostrarCarrito();
  saveLocalStorage();//SE ACTUALIZA EL LOCAL STORAGE  CUANDO ELIMINAMOS UN PROD
}
//OVALO DE COLOR QUE APARECE EN EL CARRITO, SOLO CUANDO EL USUARIO COMPRA, CONTANDO LOS PRODUCTOS ELEGIDOS, NO EL TOTA DE ELLOS.
const contadorCarrito = () => {
    carritoCantidad.style.display = "block";
    carritoCantidad.innerText = carrito.length;

    const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  carritoCantidad.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}; 
    contadorCarrito();
    
    function vaciarCarrito() { 
    Swal.fire({
    title: "¿Estás seguro?",
    icon: "question",
    html: `Se van a borrar ${carrito.reduce(
      (acc, producto) => acc + producto.cantidad, 0)} productos.`,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      carrito.length = 0;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarProductos();
      contadorCarrito();

        Swal.fire({
        title: "Carrito vaciado",
        icon: "success",
        confirmButtonText: "Aceptar",
      
      });
      setTimeout(function () {
        location.reload();
      }, 2000);
    }
  });
      }
      
  
  