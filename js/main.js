const carro = document.querySelector(".contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");
const ventanaContainer = document.getElementById("ventanaContainer");
const carritoCantidad = document.getElementById("carritoCantidad");

let carrito = [];

const productos = [
  {
    id: 1,
    nombre: "Rodillo de Masajes",
    precio: 4900,
    precioConIva: 5929,
    imagen: "../assets/accesorio.jpg",
    descripcionCorta: "Rodillo  de masajes de espuma",
    descripcion:
      "Rodillo de Espuma para Puntos Desencadenantes.  Ideal para elongar, preparar y relajar los músculos antes y después de ejercitarlos. Produce un efectivo masaje en Músculos Doloridos y tensos, incentivando la mejor circulación sanguinea y mayor bienestar en todo el organismo.",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Esterilla Acolchada",
    precio: 3999,
    precioConIva: 4838.79,
    imagen: "../assets/images(13).jpg",
    descripcionCorta: "Esterilla Acolchada antideslizante",
    descripcion:
      "Esterilla acolchada 100% antideslizante, 1.5cm de espesor. La colchoneta yoga mide 1 x 61,5  x 182 cm (alto x ancho x fondo) y sirve perfectamente tanto para hacer ejercicios como para dormir, cabe en cualquier bolso y carpa. Ideal para ejercitarse o descansar cómodamente.",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Mat",
    precio: 5400,
    precioConIva: 6534,
    imagen: "../assets/images(15).jpg",
    descripcionCorta: "Mat ecológico",
    descripcion:
      "Esterilla Yoga Antideslizante, Colchoneta Yoga Mat con Material Ecológico TPE ,Colchoneta Gimnasia con Correa de Hombro.  Esta alfombra de entrenamiento tiene superficies antideslizantes de doble cara brindando una actividad segura y placentera.",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Bloque de Yoga",
    precio: 3499,
    precioConIva: 4233.79,
    imagen: "../assets/bloque.jpg",
    descripcionCorta: "Bloque de goma eva",
    descripcion:
      "Bloque de Yoga y Correa. Es un bloque de goma eva de alta densidad para apoyar y profundizar las posturas. Correa Yoga（2.4m） para Estiramiento y elongación de brazos, piernas y espalda. Está diseñado para actividades como yoga, stretching, pilates y rehabilitación.",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Almohada Lumbar",
    precio: 4700,
    precioConIva: 5687,
    imagen: "../assets/almohada_lumbar.jpg",
    descripcionCorta: "almohada correctora",
    descripcion:
      "Almohada de refuerzo de yoga, de cintura y para vértebras lumbares. Corrección de pelvis. Es una buena ayuda para aliviar la presión y el dolor en cintura, rodillas, caderas y articulaciones de los tobillos. Brinda mayor beneficio postural a la hora de ejercitar.",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Kit x 3",
    precio: 12000,
    precioConIva: 14520,
    imagen: "../assets/set.jpg",
    descripcionCorta: "Kit: cinturón, bloque y bolster",
    descripcion:
      "Con estos 3 productos: cinturón, bloques y bolster tenés la posibilidad de experimentar las asanas de yoga con mayor facilidad y comodidad; realizando tus ejercicios con mayor técnica y eficacia. Esto garantiza un cuerpo sin lesiones. Los súper recomendamos!.",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Kit Relax",
    precio: 5900,
    precioConIva: 7139,
    imagen: "../assets/kit-relax.jpeg",
    descripcionCorta: "Kit terapéutico",
    descripcion:
      "Conjunto terapéutico de almohada cervical y ocular. Se adapta al cuerpo, relaja, desinflama y quita tensiones, además de la propiedad de ser aromática, aplicándose la aromaterapia.",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Medias Antideslizantes",
    precio: 5400,
    precioConIva: 6534,
    imagen: "../assets/media.jpg",
    descripcionCorta: "Medias deportivas, antideslizantes",
    descripcion:
      "3 Pares Medias de Yoga Antideslizantes. Media Deportiva para Pilates, Danza, Fitness, con Suela de Silicona. Stock en varios colores. Evita lesiones y Ampollas. Talla única (35-40). ",
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Bolsa de Yoga",
    precio: 13900,
    precioConIva: 14520,
    imagen: "../assets/bolso.jpg",
    descripcionCorta: "Bolsa para esterilla",
    descripcion:
      "Bolsa de Yoga para Esterilla, Bolsa de Yoga portátil Impermeable y Correa de Esterilla de Yoga Ajustable. Bolsa de Transporte para Esterilla de Yoga de Longitud Extra con 2 Bolsillos.",
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "Almohadon",
    precio: 7600,
    precioConIva: 9196,
    imagen: "../assets/almohadon.jpg",
    descripcionCorta: "Almohadón de trigo",
    descripcion:
      "Cojin o almohadón yoga con relleno de trigo sarraceno, altura 15 x 35cm. Es la ayuda perfecta para su relajación, ya sea en casa, en estudios de yoga o meditación. Favorece el apoyo cómodo de las piernas y la verticalidad de la columna.",
    cantidad: 1,
  },
  {
    id: 11,
    nombre: "Aro Dribbling",
    precio: 3200,
    precioConIva: 3872,
    imagen: "../assets/aro.jpg",
    descripcionCorta: "Aro de yoga",
    descripcion:
      "el Aro Dribbling Pilates mejora tu equilibrio, postura y la flexibilidad, podés trabajar brazos y piernas de forma isométrica. Activa y tonifica los músculos de forma específica y sin gran esfuerzo. De fácil almacenamiento",
    cantidad: 1,
  },
];
function mostrarProductos() {
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
    
    
    </div>`;

    //AGREGO TARJETA A PAGINA
    carro.append(tarjeta);
     //CREO BOTON DE COMPRA
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    tarjeta.append(comprar);

    comprar.addEventListener("click", () => {
      const productoRepetido = carrito.some(
        (productoRepeat) => productoRepeat.id === producto.id
      );

      if (productoRepetido) {
        carrito.map((prod) => {
          if (prod.id === producto.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          precioconIVA: producto.precioConIva,
          imagen: producto.imagen,
          cantidad: producto.cantidad,
        });
      }
      console.log(carrito);
      contadorCarrito();//EN ESTE CASO SE VAN INCORPORANDO LOS PRODUCTOS ELEGIDOS, NO SU CANTIDAD.
    });
  });
}
mostrarProductos();

// VENTANA DE COMPRA
const mostrarCarrito = () => {
  ventanaContainer.innerHTML = "";
  ventanaContainer.style.display = "flex";
  const ventanaHeader = document.createElement("div");
  ventanaHeader.className = "ventana-header";
  ventanaHeader.innerHTML = `
  <h1 class="ventana-header-title">Carrito</h1>
`;
  ventanaContainer.append(ventanaHeader);

  //BOTON ELIMINAR COMPRA
  const ventanaButton = document.createElement("h1");
  ventanaButton.innerText = "X";
  ventanaButton.className = "ventana-header-button";

  ventanaButton.addEventListener("click", () => {
    ventanaContainer.style.display = "none";
  });
  ventanaHeader.append(ventanaButton);

  //RECORRO CARRITO

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
    
    `;
    ventanaContainer.append(contenidoCarrito);
   //BOTON ELIMINAR PRODUCTO ELEGIDO
    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "productoEliminado";
    contenidoCarrito.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });

  //CALCULA TOTAL COMPRA

  const total = carrito.reduce(
    (acc, el) => acc + el.precio * 1.21 * el.cantidad,
    0
  );

  const totalCompra = document.createElement("div");
  totalCompra.className = "total";
  totalCompra.innerHTML = `total a pagar: ${total} $`;
  ventanaContainer.append(totalCompra);
};
verCarrito.addEventListener("click", mostrarCarrito);
//ELIMINA PRODUCTO ELEGIDO
const eliminarProducto = () => {
  const id = carrito.find((elemento) => elemento.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });

  contadorCarrito();//ME DICE LA EXTENSIÓN DEL CARRITO, EN ESTE CASO SE RESTA PRODUCTO ELEGIDO
  mostrarCarrito();
};
//OVALO DE COLOR QUE APARECE EN EL CARRITO, SOLO CUANDO EL USUARIO COMPRA, CONTANDO LOS PRODUCTOS ELEGIDOS, NO EL TOTA DE ELLOS.
const contadorCarrito = () => {
  carritoCantidad.style.display = "block";
  carritoCantidad.innerText = carrito.length;
};

