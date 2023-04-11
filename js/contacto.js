
// Seleccionamos el elemento principal del documento y definimos los eventos onmouseover y onmouseout
const main = document.querySelector("#main");
main.onmouseout = () => {
  main.style.backgroundImage = "url(../assets/yoga-telas.jpg)";
};
main.onmouseover = () => {
  main.style.background = "black";
};

// Definimos una clase para el formulario
class Formulario {
  constructor() {
    // Seleccionamos los elementos relevantes del formulario y definimos los campos obligatorios
    this.enviarBtn = document.getElementById("send");
    this.captchaLabel = document.querySelector("#captcha");
    this.captchaInput = document.getElementById("captchaInput");
    this.formulario = document.querySelector("form");
    this.mensaje = document.getElementById("msg");
    this.enviaMensaje = document.getElementById("enviaMensaje");
    this.camposObligatorios = ["nombre", "apellido", "edad", "email", "direccion", "comentario"];
    this.captcha = null;
  }

  // Función que genera un número aleatorio de 6 dígitos entre 0 y 999999
  generarCaptcha = () => {
    this.captcha = Math.floor(Math.random() * 999999);
    this.captchaLabel.innerText = this.captcha;
  }

  // Función que verifica que todos los campos obligatorios estén completos y que el captcha sea correcto
  verificarFormulario = (evento) => {
    evento.preventDefault();

    let camposCompletos = true;
    // Verificamos si todos los campos obligatorios están completos
    this.camposObligatorios.forEach((campo) => {
      const input = document.getElementById(campo);
      if (!input.value.trim()) {
        camposCompletos = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    if (!camposCompletos) {
      // Si no están completos, mostramos un mensaje de error y generamos un nuevo captcha
      this.generarCaptcha();
      this.mensaje.innerText = "Por favor, complete todos los campos.";
      return;
    }

    // Si los campos están completos, verificamos si el captcha es correcto
    if (this.captchaInput.value != this.captcha) {
      // Si no es correcto, reseteamos el formulario, mostramos un mensaje de error y generamos un nuevo captcha
      this.resetearFormulario();
      this.captchaInput.classList.add("error");
      this.mensaje.innerText = "Captcha incorrecto.";
      this.generarCaptcha();
      return;
    }

    // Si todo está bien, mostramos un mensaje de éxito, reseteamos el formulario y generamos un nuevo captcha
    this.resetearFormulario();
    this.enviaMensaje.innerText = "¡Gracias por su consulta!";
    this.formulario.reset();
    this.generarCaptcha();
  }

  // Función que resetea los valores del formulario a su estado original
  resetearFormulario = () => {
    this.mensaje.innerText = "";

    this.camposObligatorios.forEach((campo) => {
      const input = document.getElementById(campo);
      input.classList.remove("error");
      // Guardamos el valor del campo en el local storage antes de resetearlo
      this.guardarEnLocalStorage({ target: input });
    });
    this.captchaInput.value = "";
    this.captchaInput.classList.remove("error");
    
  }
  guardarEnLocalStorage = ({ target }) => {
    localStorage.setItem(target.id, target.value);
  };

  cargarDesdeLocalStorage = () => {
    this.camposObligatorios.forEach(campo => {
      const input = document.querySelector(`#${campo}`);
      input.value = localStorage.getItem(campo) ?? "";
    });
  };

  inicializar = () => {
    this.enviarBtn.addEventListener("click", this.verificarFormulario);

    this.formulario.addEventListener("change", this.guardarEnLocalStorage);

    this.generarCaptcha();

    window.addEventListener("load", this.cargarDesdeLocalStorage);

    this.resetearFormulario();
    this.formulario.reset();
  
  }
}
const formulario = new Formulario();
formulario.inicializar();
formulario.resetearFormulario();
/*
El código crea una instancia de la clase Formulario y la asigna a la variable formulario. Luego llama a dos métodos de la instancia: inicializar() y resetearFormulario().

inicializar() configura el formulario para que responda a eventos, como el envío del formulario y cambios en los campos del formulario. También genera un captcha inicial.

resetearFormulario() restaura el formulario a su estado original, eliminando los mensajes de error . También se genera un nuevo captcha.  Estos dos métodos se encargan de inicializar y restablecer el formulario para que esté listo para su uso.*/