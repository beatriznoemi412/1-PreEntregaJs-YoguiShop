let age = prompt("Cuántos años tienes?");

const mayoriaEdad = 18;

if (age >= mayoriaEdad) {
  alert("Puedes comprar");
} else {
  alert("Regresa cuando tengas 18 años");
}

//Cálculo de precio final productos con IVA y gasto de envío
const suma = (a, b, c) => a + b + c;

const iva = (x) => x * 0.21;
let precioRodillo = 4900;
let precioEsterilla = 3999;
let precioMat = 5400;
let precioBloque = 3499;
let precioAlmohadaLumbar = 4700;
let precioKit = 12000;
let precioKitRelax = 5900;
let precioMediasAntideslizantes = 5400;
let precioBolsaYoga = 13900;
let precioAlmohadon = 7600;

let gastoEnvio = 600;

let precioFinalRodillo = suma(precioRodillo, iva(precioRodillo), gastoEnvio);
let precioFinalEsterilla = suma(
  precioEsterilla,
  iva(precioEsterilla),
  gastoEnvio
);
let precioFinalMat = suma(precioMat, iva(precioMat), gastoEnvio);
let precioFinalBloque = suma(precioBloque, iva(precioBloque), gastoEnvio);
let precioFinalAlmohadaLumbar = suma(
  precioAlmohadaLumbar,
  iva(precioAlmohadaLumbar),
  gastoEnvio
);
let precioFinalKit = suma(precioKit, iva(precioKit), gastoEnvio);
let precioFinalKitRelax = suma(precioKitRelax, iva(precioKitRelax), gastoEnvio);
let precioFinalMediasAntideslizantes = suma(
  precioMediasAntideslizantes,
  iva(precioMediasAntideslizantes),
  gastoEnvio
);
let precioFinalBolsaYoga = suma(
  precioBolsaYoga,
  iva(precioBolsaYoga),
  gastoEnvio
);
let precioFinalAlmohadon = suma(
  precioAlmohadon,
  iva(precioAlmohadon),
  gastoEnvio
);

//Cálculo de precio final de producto de Oferta incluyendo gasto de envio e iva
const resta = (a, b) => a - b;
let precioProducto = 12000;
let descuento = 1200;

let precioOferta = resta(
  suma(precioProducto, iva(precioProducto), gastoEnvio),
  descuento
);

alert(
  "Precio de Oferta Kit x 3 con gasto de envío incluido es : " +
    " " +
  precioOferta
);

//El usuario elige producto y se informa precio final
let productoElegido = prompt(
  "Que producto desea comprar? 1) Rodillo 2) Esterilla 3) Mat 4) Bloque 5) AlmohadaLumbar 6) KitRelax 7) MediasAntideslizantes 8) BolsaYoga 9) Almohadon 10) Oferta"
);

switch (productoElegido) {
  case "Rodillo":
    console.log("precioFinalRodillo:" + " " + precioFinalRodillo);
    break;
  case "Esterilla":
    console.log("precioFinalEsterilla:" + " " + precioFinalEsterilla);
    break;
  case "Mat":
    console.log("precioFinalMat:" + " " + precioFinalMat);
    break;
  case "Bloque":
    console.log("precioFinalBloque:" + " " + precioFinalBloque);
    break;
  case "AlmohadaLumbar":
    console.log("precioFinalAlmohadaLumbar:" + " " + precioFinalAlmohadaLumbar);
    break;
  case "Kit":
    console.log("precio oferta:" + " " + precioOferta);
    break;
  case "KitRelax":
    console.log("precioFinalKitRelax:" + " " + precioFinalKitRelax);
    break;
  case "MediasAntideslizantes":
    console.log(
      "precioFinalMediasAntideslizantes:" + " " + precioMediasAntideslizantes
    );
    break;
  case "BolsaYoga":
    console.log("precioFinalBolsaYoga:" + " " + precioFinalBolsaYoga);
    break;
  case "Almohadon":
    console.log("precioFinalAlmohadon:" + " " + precioFinalAlmohadon);
    break;
  default:
    alert("No tenemos ese producto. Gracias por su interés.");
    break;
    }
productoElegido=prompt("Quieres elegir otro producto?");

switch (productoElegido) {
  case "Rodillo":
    console.log("precioFinalRodillo:" + " " + precioFinalRodillo);
    break;
  case "Esterilla":
    console.log("precioFinalEsterilla:" + " " + precioFinalEsterilla);
    break;
  case "Mat":
    console.log("precioFinalMat:" + " " + precioFinalMat);
    break;
  case "Bloque":
    console.log("precioFinalBloque:" + " " + precioFinalBloque);
    break;
  case "AlmohadaLumbar":
    console.log("precioFinalAlmohadaLumbar:" + " " + precioFinalAlmohadaLumbar);
    break;
  case "Kit":
    console.log("precio oferta:" + " " + precioOferta);
    break;
  case "KitRelax":
    console.log("precioFinalKitRelax:" + " " + precioFinalKitRelax);
    break;
  case "MediasAntideslizantes":
    console.log(
      "precioFinalMediasAntideslizantes:" + " " + precioMediasAntideslizantes
    );
    break;
  case "BolsaYoga":
    console.log("precioFinalBolsaYoga:" + " " + precioFinalBolsaYoga);
    break;
  case "Almohadon":
    console.log("precioFinalAlmohadon:" + " " + precioFinalAlmohadon);
    break;
  default:
    alert("No tenemos ese producto. Gracias por su interés.");
    break;
    }
