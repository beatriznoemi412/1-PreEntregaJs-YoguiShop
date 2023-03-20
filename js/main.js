const carro = document.querySelector(".contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");
const ventanaContainer = document.getElementById("ventanaContainer");
const carritoCantidad = document.getElementById("carritoCantidad");

const carrito = [];


class Producto {
  constructor(
    id,
    nombre,
    precio,
    precioConIVA,
    imagen,
    descripcionCorta,
    descripcion,
    cantidad,
    
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.precioConIVA = precioConIVA;
    this.imagen = imagen;
    this.descripcionCorta = descripcionCorta;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
  }
  calcularIVA(){
    return this.precio * .21;
    }
  crearTarjeta() {
    //creo elementos de la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.id = `${this.id}`;
    tarjeta.innerHTML = `<h5 class="card-header">${this.nombre}</5>
    <img src= "${this.imagen}" class="card-img-top imagenProducto">
    <div class="card-body">   
        <p class="card-text">${this.descripcionCorta}</p>       
        <p class="card-text">${this.descripcion}</p> 
        <p class="btn" id="precio">$ ${this.precio}</p>
        <p class="btn" id="precioIVA"> precio con IVA: $ ${this.precioConIVA}</p>
        <button class="comprar" id="compra">COMPRAR </button>
        
        </div>`;
      
    //agrego tarjeta a página
    carro.append(tarjeta);
}
comprar(){

}
  
}
  
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

for (let i = 0; i < productos.length; i++) {
  const producto = productos[i];

  const tarjeta = new Producto(producto.id, producto.nombre, producto.precio, producto.precioConIva, producto.imagen, producto.descripcionCorta, producto.descripcion);
  tarjeta.crearTarjeta();
  

  const iva = tarjeta.calcularIVA();
  console.log(`El IVA para ${producto.nombre} es de ${iva}`);


}

const compra = document.querySelector("#compra");
compra.addEventListener("click", () => {
 
 
  const productoRepetido = carrito.some((productoRepeat) => productoRepeat.id === this.id);

  if(productoRepetido){
    carrito.map((prod)=>{
      if(prod.id === this.id){
        prod.cantidad++;
      }
    })
  }else{

    carrito.push({
      id: this.id,
      nombre: this.nombre,
      precio:this.precio,
      precioconIVA : this.precioConIva,
      cantidad : this.cantidad,
    });
  console.log(carrito);
 }

});