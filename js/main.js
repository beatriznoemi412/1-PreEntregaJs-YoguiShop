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
      this.vendido = false;
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
    // producto.sumaGastoEnvio();
  }
  const todoslosProductos = productos.map(
    (producto) => producto.producto + " " + producto.precio + "$"
  );

  alert(todoslosProductos.join("\n"));

  const consulta = parseInt(
    prompt(
      "Consultas sobre algún producto? Ingrese el numero 1-rodillo, 2-esterilla, 3-mat, 4-bloque, 5-almohada lumbar, 6-kit, 7-kit relax, 8-medias antideslizantes, 9-bolsa yoga, 10-almohadon"
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
  
  const carrito = [];
  while (productoElegido != "no") {
    let compra = prompt("agrega un producto a tu carrito".toLowerCase());
    console.log(compra);

    const prodComprado = productos.find((p) => p.producto === compra);
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
    alert("gracias por tu compra!.");

  
      let subtotal = 0;
    
      carrito.forEach((carritoSubtotal) => {
        
         subtotal += carritoSubtotal.producto * carritoSubtotal.unidades 
         
          });
          
         console.log(subtotal);
      
     break;
    }
    

  const totalCompra = carrito.reduce(
    (acc, el) => acc + el.precio * el.unidades, 0
  );

  console.log("El total de tu compra es:" + " " + "$" +totalCompra);
      
}else if(productoElegido == "no") {
  alert("Gracias por visitarnos!! Hasta pronto.");
}

  let distancia = prompt("A cuántos km. vives de Tandil (Bs.AS)??");
  if (distancia > 40) {
    alert("Debes abonar $ 600 de gasto de envío. Hasta pronto!!");
  } else {
    alert("No debes abonar gasto de envío. hasta pronto!!");
  }

 