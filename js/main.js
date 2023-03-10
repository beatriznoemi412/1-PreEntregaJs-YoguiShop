const mayoriaEdad = 18;
let age = prompt("Cuántos años tienes?");

if (age >= mayoriaEdad) {
  alert("Puedes comprar");
} else {
  alert("Regresa cuando tengas 18 años");
}

//El usuario elige producto y se informa precio final
let productoElegido = prompt("Hola, deseas comprar algún producto: si o no");

while (productoElegido != "si" && productoElegido.toUpperCase() != "no") {
  alert("Por favor ingresa si o no");
  productoElegido = prompt("Hola, deseas comprar algún producto: si o no");
}
if (productoElegido == "si") {
  productoElegido = alert(
    "A continuación nuestros productos e informate del precio total, incluido IVA"
  );

  class Producto {
    constructor(id, producto, precio) {
      this.id = id;
      this.producto = producto;
      this.precio = parseFloat(precio);
      
    }
    sumaIVA() {
      this.precio = this.precio * 1.21;
    }

    vender() {
      this.vendido = true;
    }
  }
  const productos = [];
  productos.push(new Producto(1, "rodillo", 4900));
  productos.push(new Producto(2, "esterilla", 3999));
  productos.push(new Producto(3, "mat", 5400));
  productos.push(new Producto(4, "bloque", 3499));
  productos.push(new Producto(5, "almohada lumbar", 4700));
  productos.push(new Producto(6, "kit", 12000));
  productos.push(new Producto(7, "kit relax", 5900));
  productos.push(new Producto(8, "medias antideslizantes", 5400));
  productos.push(new Producto(9, "bolsa yoga", 13900));
  productos.push(new Producto(10, "almohadón", 7600));

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
