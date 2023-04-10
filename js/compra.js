const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardMonth = document.getElementById("cardMonth");
const cardYear = document.getElementById("cardYear");
const spanCvv = document.getElementById("spanCvv");
const numeroTarjeta = document.getElementById("numeroTarjeta");
const nombreTarjeta = document.getElementById("titular");
const mes = document.getElementById("mes");
const anio = document.getElementById("anio");
const cvv = document.getElementById("codigoSeguridad");
const submit = document.getElementById("submit");
const formulario = document.getElementById("formulario");
//Operador Condicional (ternario)
numeroTarjeta.addEventListener("input", () => {
  cardNumber.innerText = (!isNaN(numeroTarjeta.value)) ? numeroTarjeta.value : "0000 0000 0000 0000";
});

nombreTarjeta.addEventListener("input", () => {
  cardName.innerText = (isNaN(nombreTarjeta.value)) ? nombreTarjeta.value : "Juan Perez";
});

mes.addEventListener("input", () => {
  cardMonth.innerText = (!isNaN(mes.value)) ? mes.value : "00";
});
anio.addEventListener("input", () => {
  cardYear.innerText = (!isNaN(anio.value)) ? anio.value : "00";
});
cvv.addEventListener("input", () => {
  spanCvv.innerText = (!isNaN(cvv.value)) ? cvv.value : "000";
});

//Se evita repetir código y se simplifica la validación de los inputs. Además, si en el futuro se necesita agregar más validaciones, basta con modificar la función validarInput y llamarla para el nuevo input.
function validarInput(input, mensajeError,tipoValidacion) {
  let regex;
  
 
  if (tipoValidacion === "letras") {
      regex = /^[a-zA-Z'-]+\s?[a-zA-Z'-]+$/;

    } else if (tipoValidacion === "numeros") {
      regex = /^[0-9]+$/;
    } else {
      throw new Error("Tipo de validación inválido.");
    }
  
    if (input.value.match(regex)) {
      return true;
    } else {
      throw new Error(mensajeError);
    }
  }

function validarCliente(e) {
  e.preventDefault();
 
  try {
    validarInput(numeroTarjeta, "Por favor, ingrese el número de tarjeta.", "numeros");
    validarInput(nombreTarjeta, "Por favor, ingrese el nombre del titular.", "letras");
    validarInput(mes, "Por favor, seleccione el mes de vencimiento.", "numeros");
    validarInput(anio, "Por favor, seleccione el año de vencimiento.", "numeros");
    validarInput(cvv, "Por favor, ingrese el código de seguridad.","numeros");

    // Actualiza la información de la tarjeta de crédito en localStorage
    const creditCardInfo = {
      numeroTarjeta: numeroTarjeta.value,
      nombreTarjeta: nombreTarjeta.value,
    };
    localStorage.setItem("creditCardInfo", JSON.stringify(creditCardInfo));
    //Muestra informacion tarjeta cred. en local

    const storedCreditCardInfo = JSON.parse(
      localStorage.getItem("creditCardInfo")
    );
    numeroTarjeta.value = storedCreditCardInfo.numeroTarjeta;
    nombreTarjeta.value = storedCreditCardInfo.nombreTarjeta;

    // mostrar un mensaje de confirmación utilizando Toastify
    Toastify({
      text: `Compra realizada con éxito.\n¡Gracias por elegirnos!`,
      duration: 4000, // duración del mensaje en milisegundos
      newWindow: true,
      close: true,
      gravity: "center",
      position: "center",
      backgroundColor: "linear-gradient(to right, #44C59B , #29AB81)",
      stopOnFocus: true,
      click: function () {}, // Callback after click
    }).showToast();
    formulario.reset();
  } catch (error) {
    Toastify({
      text: error.message,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "center",
      position: "center",
      backgroundColor: "linear-gradient(to right, #ff6a00 , #ee0979)",
      stopOnFocus: true,
      click: function () {},
    }).showToast();
  }
}

function resetCamposTarjetaCredito() {
  cardNumber.innerText = "0000 0000 0000 0000";
  cardName.innerText = "Juan Perez";
  cardMonth.innerText = "00";
  cardYear.innerText = "00";
  spanCvv.innerText = "000";
}
// resetea la tarjeta de credito cuando form es reseteado
formulario.addEventListener("reset", () => {
  resetCamposTarjetaCredito();
});
//Evento que valida form al hacer click en botón submit
 submit.addEventListener("click", validarCliente);

formulario.reset();
