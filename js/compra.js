
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


function validarCliente(e) {
  e.preventDefault();

  try {
    if (
      !numeroTarjeta.value ||
      !nombreTarjeta.value ||
      !mes.value ||
      !anio.value ||
      !cvv.value
    ) {
      throw new Error("Por favor, complete todos los campos.");
    }

    numeroTarjeta.addEventListener("input", () => {
      if (!isNaN(numeroTarjeta.value)) {
        cardNumber.innerText = numeroTarjeta.value;
      } else {
        cardNumber.innerText = "0000 0000 0000 0000";
      }
    });

    nombreTarjeta.addEventListener("input", () => {
      if (nombreTarjeta.value) {
        cardName.innerText = nombreTarjeta.value;
      } else {
        cardName.innerText = "Juan Perez";
      }
    });
    mes.addEventListener("input", () => {
      if (mes.value.length === 2) {
        cardMonth.innerText = mes.value;
      } else {
        cardMonth.innerText = "00";
      }
    });
    anio.addEventListener("input", () => {
      if (anio.value.length === 2) {
        cardYear.innerText = anio.value;
      } else {
        cardYear.innerText = "00";
      }
    });

    cvv.addEventListener("input", () => {
      if (cvv.value.length === 3) {
        spanCvv.innerText = cvv.value;
      } else {
        spanCvv.innerText = "000";
      }
    });
  
    // Actualiza la información de la tarjeta de crédito en localStorage
const creditCardInfo = {
  numeroTarjeta: numeroTarjeta.value,
  nombreTarjeta: nombreTarjeta.value,
};
localStorage.setItem("creditCardInfo", JSON.stringify(creditCardInfo));

    // mostrar un mensaje de confirmación utilizando Toastify
    Toastify({
      text: `Compra realizada con éxito.\n¡Gracias por elegirnos!`,
      duration: 4000, // duración del mensaje en milisegundos
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      background: "#44C59B",
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
      gravity: "top",
      position: "center",
      background: "#44C59B",
      stopOnFocus: true,
      click: function () {},
    }).showToast();
  }
}
// resetea la tarjeta de credito cuando form es reseteado
formulario.addEventListener("reset",() =>{
  resetCamposTarjetaCredito();
});

function resetCamposTarjetaCredito() {
  cardNumber.innerText = "0000 0000 0000 0000";
  cardName.innerText = "Juan Perez";
  cardMonth.innerText = "00";
  cardYear.innerText = "00";
  spanCvv.innerText = "000";
}


submit.addEventListener("click", validarCliente);
 
if (localStorage.getItem("creditCardInfo")) {
const creditCardInfo = JSON.parse(localStorage.getItem("creditCardInfo"));
numeroTarjeta.value = creditCardInfo.numeroTarjeta;
nombreTarjeta.value = creditCardInfo.nombreTarjeta;

// Update the credit card information in localStorage
localStorage.setItem("creditCardInfo", JSON.stringify(creditCardInfo));
}
formulario.reset();