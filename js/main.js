const carro = document.querySelector(".contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");
const ventanaContainer = document.getElementById("ventanaContainer");
const carritoCantidad = document.getElementById("carritoCantidad");

const carrito = [];


const productos = [
  {
    id: 1,
    nombre: "Rodillo de Masajes",
    precio: "4900 + IVA", 
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
    precio: "3999 + IVA", 
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
    precio: "5400 + IVA",
    precioConIva: 6534,
    imagen: "../assets/images(15).jpg",
    tituloCard: "Mat ecológico",
    descripcion:
      "Esterilla Yoga Antideslizante, Colchoneta Yoga Mat con Material Ecológico TPE ,Colchoneta Gimnasia con Correa de Hombro.  Esta alfombra de entrenamiento tiene superficies antideslizantes de doble cara brindando una actividad segura y placentera.",
    cantidad: 1,
    },
  {
    id: 4,
    nombre: "Bloque de Yoga",
    precio: "3499 + IVA",
    precioConIva: 4233.79,
    imagen: "../assets/bloque.jpg",
    tituloCard: "Bloque de goma eva",
    descripcion:
      "Bloque de Yoga y Correa. Es un bloque de goma eva de alta densidad para apoyar y profundizar las posturas. Correa Yoga（2.4m） para Estiramiento y elongación de brazos, piernas y espalda. Está diseñado para actividades como yoga, stretching, pilates y rehabilitación.",
    cantidad: 1,
    },
  {
    id: 5,
    nombre: "Almohada Lumbar",
    precio: "4700 + IVA",
    precioConIva: 5687,
    imagen: "../assets/almohada_lumbar.jpg",
    tituloCard: "almohada correctora",
    descripcion:
      "Almohada de refuerzo de yoga, de cintura y para vértebras lumbares. Corrección de pelvis. Es una buena ayuda para aliviar la presión y el dolor en cintura, rodillas, caderas y articulaciones de los tobillos. Brinda mayor beneficio postural a la hora de ejercitar.",
    cantidad: 1,
    },
  {
    id: 6,
    nombre: "Kit x 3",
    precio: "12000 + IVA", 
    precioConIva: 14520,
    imagen: "../assets/set.jpg",
    tituloCard: "Kit: cinturón, bloque y bolster",
    descripcion:
      "Con estos 3 productos: cinturón, bloques y bolster tenés la posibilidad de experimentar las asanas de yoga con mayor facilidad y comodidad; realizando tus ejercicios con mayor técnica y eficacia. Esto garantiza un cuerpo sin lesiones. Los súper recomendamos!.",
    cantidad: 1,
    },
  {
    id: 7,
    nombre: "Kit Relax",
    precio: "5900 + IVA",
    precioConIva: 7139,
    imagen: "../assets/kit-relax.jpeg",
    tituloCard: "Kit terapéutico",
    descripcion:
      "Conjunto terapéutico de almohada cervical y ocular. Se adapta al cuerpo, relaja, desinflama y quita tensiones, además de la propiedad de ser aromática, aplicándose la aromaterapia.",
    cantidad: 1,
    },
  {
    id: 8,
    nombre: "Medias Antideslizantes",
    precio: "5400 + IVA",
    precioConIva: 6534,
    imagen: "../assets/media.jpg",
    tituloCard: "Medias deportivas, antideslizantes",
    descripcion:
      "3 Pares Medias de Yoga Antideslizantes. Media Deportiva para Pilates, Danza, Fitness, con Suela de Silicona. Stock en varios colores. Evita lesiones y Ampollas. Talla única (35-40). ",
    cantidad: 1,
    },
  {
    id: 9,
    nombre: "Bolsa de Yoga",
    precio: "13900 + IVA",
    precioConIva: 14520,
    imagen: "../assets/bolso.jpg",
    tituloCard: "Bolsa para esterilla",
    descripcion:
      "Bolsa de Yoga para Esterilla, Bolsa de Yoga portátil Impermeable y Correa de Esterilla de Yoga Ajustable. Bolsa de Transporte para Esterilla de Yoga de Longitud Extra con 2 Bolsillos.",
    cantidad: 1,
    },
  {
    id: 10,
    nombre: "Almohadon",
    precio: "7600 + IVA",
    precioConIva: 9196,
    imagen: "../assets/almohadon.jpg",
    tituloCard: "Almohadón de trigo",
    descripcion:
      "Cojin o almohadón yoga con relleno de trigo sarraceno, altura 15 x 35cm. Es la ayuda perfecta para su relajación, ya sea en casa, en estudios de yoga o meditación. Favorece el apoyo cómodo de las piernas y la verticalidad de la columna.",
    cantidad: 1,
    },
  {
    id: 11,
    nombre: "Aro Dribbling",
    precio: "3200 + IVA",
    precioConIva:3872,
    imagen: "../assets/aro.jpg",
    tituloCard: "Aro de yoga",
    descripcion:
      "el Aro Dribbling Pilates mejora tu equilibrio, postura y la flexibilidad, podés trabajar brazos y piernas de forma isométrica. Activa y tonifica los músculos de forma específica y sin gran esfuerzo. De fácil almacenamiento",
    cantidad: 1,
    },
];

for (const item of productos){
  let tarjeta = document.createElement("div");
  tarjeta.className = "card";
  tarjeta.id = `${item.id}`;
  tarjeta.innerHTML = `<h5 class="card-header">${item.nombre}</5>
<img src="${item.imagen}" class="card-img-top imagenProducto"
alt="${item.tituloCard}">
<div class="card-body">               
    <p class="card-text">${item.descripcion}</p> 
    <p class="btn" id="precio">$ ${item.precio}</p>
    <p class="iva">$ ${item.precioConIva}</p>
    </div>`;

  carro.append(tarjeta);

  class Producto {
    constructor(id, nombre, precio, _prod) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this._prod = []
    }
    calcularIVA() {
     const iva = this.precio * .21;
     return iva;
    }
    comprar(){
      console.log(`compraste ${this.nombre} por ${this.precio}`);
    }
    }
  
  const articulos = [];
    articulos.push(new Producto(1, "rodillo", 4900));
    articulos.push(new Producto(2, "esterilla", 3999));
    articulos.push(new Producto(3, "mat", 5400));
    articulos.push(new Producto(4, "bloque", 3499));
    articulos.push(new Producto(5, "almohada lumbar", 4700));
    articulos.push(new Producto(6, "kit", 12000));
    articulos.push(new Producto(7, "kit relax", 5900));
    articulos.push(new Producto(8, "medias antideslizantes", 5400));
    articulos.push(new Producto(9, "bolsa yoga", 13900));
    articulos.push(new Producto(10, "almohadón", 7600));
    articulos.push(new Producto(11, "Aro Dribbling", 3200));
    
    const ivaElemento = document.querySelector(".iva")
    //obtengo el producto del cual se desea calcular el IVA
    const producto = articulos[0] ;
   //calcular el IVA y mostrarlo en DOM
   const iva = producto.calcularIVA();
   ivaElemento.innerText = `El IVA es: ${iva}, total: $ ${iva + producto.precio}`;
   tarjeta.append(iva);
  

   //producto = productos [0];
   //producto.comprar();
  
  
    const comprar =  document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    
    tarjeta.append(comprar);
  
    comprar.addEventListener("click", () => {
    const productoRepetido = carrito.some((productoRepeat) => productoRepeat.id === item.id);
  
    if(productoRepetido){
      carrito.map((prod)=>{
        if(prod.id === item.id){
          prod.cantidad++;
        }
      })
    }else{
        carrito.push({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        precioconIVA : item.precioConIva,
        imagen: item.imagen,
        cantidad : item.cantidad,
      });
    console.log(carrito);
   }
    });
}

/*
  console.log(productos);

  for (const producto of productos) {
    producto.sumaIVA();
    
  }
  const todoslosProductos = productos.map(
    (producto) => producto.producto + " " + producto.precio + "$"
  );

  alert(todoslosProductos.join("\n"));

  //Usuario consulta sobre existencia de producto para su compra

  const consulta = parseInt(
    prompt(
      "Consultas sobre algún producto? Ingrese el numero: \n 1-rodillo,\n 2-esterilla,\n 3-mat,\n 4-bloque,\n 5-almohada lumbar,\n 6-kit,\n 7-kit relax,\n 8-medias antideslizantes,\n 9-bolsa yoga,\n 10-almohadon."
    )
  );

  const prodEncontrado = productos.filter((p) => p.id === consulta);

  console.log(prodEncontrado);

  const existe = productos.some((p) => p.id === consulta);

  if (existe) {
    alert("Producto existente");
  } else {
    alert("Producto Inexistente");
  }
//Posible descuento si paga en efectivo
  alert("HOY TIENES - 10% PAGO EFECTIVO!!!");
  const porcentajeDescuento = parseFloat(
    prompt("Ingresa el porcentaje de descuento")
  );

  const productosDescuento = productos.map((producto) => {
    const precioConDescuento = descuento(producto.precio, porcentajeDescuento);
    return {
      producto: producto.producto,
      precio: precioConDescuento,
      descuento: porcentajeDescuento,
    };
  });

  function descuento(precio, porcentaje) {
    return precio - (precio * porcentaje) / 100;
  }

  const todaLaMercaderia = productosDescuento.map(
    (producto) =>
      producto.producto +
      " " +
      producto.precio.toFixed(2) +
      "$ (descuento " +
      producto.descuento +
      "%)"
  );

  alert(todaLaMercaderia.join("\n"));
  console.log(productosDescuento);

  //Usuario procede a elegir productos para ingresar a carrito

  const carrito = [];
  while (productoElegido != "no") {
    let compra = prompt("agrega un producto a tu carrito".toLowerCase());
    console.log(compra);

    const prodComprado = productos.find((prod) => prod.producto === compra);
    console.log(prodComprado);

    if (prodComprado) {
      alert("Producto comprado");

      let unidades = parseInt(prompt("Cuántas unidades quieres?"));

      carrito.push({ ...prodComprado, unidades: unidades });
      console.log(carrito);
    } else {
      alert("No tenemos ese producto");
    }

    productoElegido = prompt("Quieres seguir comprando?");
  }
  while (productoElegido === "no") {
    alert("gracias por la compra!.");

    carrito.forEach((subtotal) => {
      console.log(
        "Producto:" +
          " " +
          subtotal.producto +
          " " +
          "unidades:" +
          subtotal.unidades +
          " " +
          "Precio producto $:" +
          " " +
          subtotal.precio +
          " " +
          "Subtotal compra: $" +
          " " +
          subtotal.precio * subtotal.unidades
      );
    });

    break;
  }

  const totalCompra = carrito.reduce(
    (acc, num) => acc + num.precio * num.unidades,
    0
  );

  console.log("El total de la compra es:" + " " + "$" + totalCompra);
} else if (productoElegido == "no") {
  alert("Gracias por visitarnos!! Hasta pronto.");
}


let distancia = prompt("A cuántos km. vives de Tandil (Bs.AS)??");
if (distancia > 40) {
  alert("Debes abonar $ 600 de gasto de envío. Hasta pronto!!");
} else {
  alert("No debes abonar gasto de envío. hasta pronto!!");
}
*/