let main = document.querySelector("#main");
main.onmouseout = () => {
  main.style.backgroundImage = "url(../assets/yoga-telas.jpg)";
};
main.onmouseover = () => {
  main.style.background = "black";
};

class Formulario {
  constructor() {
    this.enviarBtn = document.getElementById("send");
    this.captchaLabel = document.querySelector("#captcha");
    this.captchaInput = document.getElementById("captchaInput");
    this.formulario = document.querySelector("form");
    this.mensaje = document.getElementById("msg");
    this.enviaMensaje = document.getElementById("enviaMensaje");
    this.camposObligatorios = ["nombre", "apellido","edad", "email", "direccion", "comentario"];
    this.captcha = null;//se le da valor recién en el método generarCaptcha()
  }

  generarCaptcha = () => {
    this.captcha = Math.floor(Math.random() * (999999 - 100000) + 1);
    this.captchaLabel.innerText = this.captcha;
  }

  verificarFormulario = (evento) => {
    evento.preventDefault();

    let camposCompletos = true;

    this.camposObligatorios.forEach((campo) => {
      const input = document.getElementById(campo);
      if (!input.value.trim()) {//verifica si el valor del campo de entrada input está vacío o solo contiene espacios en blanco.El método trim( ) elimina los espacios en blanco en ambos extremos del string(mdn)
        camposCompletos = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    if (!camposCompletos) {
      this.generarCaptcha();
      this.mensaje.innerText = "Campos incompletos";
      return;
    }

    if (this.captchaInput.value != this.captcha) {
      this.resetearFormulario();
      this.captchaInput.classList.add("error");
      this.mensaje.innerText = "Captcha incorrecto";
      this.generarCaptcha();
      return;
    }

    this.resetearFormulario();
    this.enviaMensaje.innerText = "¡Gracias por su consulta!";//Se muestra un mensaje de confirmación.
    this.generarCaptcha();
  }

  resetearFormulario = () => {
    this.mensaje.innerText = "";
    this.camposObligatorios.forEach((campo) => {
      const input = document.getElementById(campo);
      input.classList.remove("error");
      input.value = "";
    });
    this.captchaInput.value = "";
    this.captchaInput.classList.remove("error");
  }

  guardarEnLocalStorage = (evento) => {
    localStorage.setItem(evento.target.id, evento.target.value);
  }

  cargarDesdeLocalStorage = () => {
    this.camposObligatorios.forEach((campo) => {
      const input = document.getElementById(campo);
      input.value = localStorage.getItem(campo) || "";
    });
  }

  inicializar = () => {
    this.enviarBtn.addEventListener("click", this.verificarFormulario);

    this.formulario.addEventListener("change", this.guardarEnLocalStorage);

    this.generarCaptcha();

    this.resetearFormulario();

    window.addEventListener("load", this.cargarDesdeLocalStorage);
  }
}

const formulario = new Formulario();
formulario.inicializar();
formulario.resetearFormulario()