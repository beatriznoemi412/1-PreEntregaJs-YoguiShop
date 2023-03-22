let main = document.querySelector("#main");
main.onmouseout = () => {
  main.style.backgroundImage = "url(../assets/yoga-telas.jpg)";
};
main.onmouseover = () => {
  main.style.background = "black";
};

//CAPTCHA

let random;
document.getElementById("send").addEventListener("click", verificarFormulario);

generarCaptcha(); // carga la pagina y llama a la funcion que genera un numero aleatorio de 6 digitos

function generarCaptcha() {
  random = Math.floor(Math.random() * (999999 - 100000) + 1);
  document.querySelector("#captcha").innerHTML = random;
}
//FORM

function verificarFormulario(e) {
  e.preventDefault();

  let error = 0; 
  // obtengo los elementos del formulario input llamados por id
let usuario = document.getElementById("usuario"),
    nombre = document.getElementById("nombre"),
    apellido = document.getElementById("apellido"),
    email = document.getElementById("email"),
    comentario = document.getElementById("comentario"),
    msg = document.getElementById("msg"),
    edad = document.getElementById("edad");
    direccion = document.getElementById("direccion"),
    tipo = document.getElementById("tipo"),
    enviaMensaje = document.getElementById("enviaMensaje"),
    captchaInput = document.getElementById("captchaInput");
   

  // Se verifica que los campos obligatorios (nombre, apellido, correo, consulta) no esten vacios
  //y a su vez convierte la variable error en 1 para mas adelante en caso de que la misma sea 1 emita un mensaje
  //de error.
  enviaMensaje.innerHTML = " ";
  nombre.value === ""? (
    nombre.classList.add("error"),
    error = 1) :  nombre.classList.remove("error");
 
  apellido.value == ""? (
    apellido.classList.add("error"),
    error = 1) : apellido.classList.remove("error");
  
  email.value == ""? (
    email.classList.add("error"),
    error = 1) : email.classList.remove("error");
  
  comentario.value == ""? (
    comentario.classList.add("error"),
    error = 1) : comentario.classList.remove("error");

  if (error == 1) {
    // si el error es 1 al menos hay un campo incompleto,y se genera un nuevo captcha
    generarCaptcha();
    msg.innerHTML = "Campos incompletos";
  } else if (captchaInput.value != random) {
    //si mensaje de captcha incorrecto, genera un nuevo captcha
    nombre.classList.remove("error");
    apellido.classList.remove("error");
    email.classList.remove("error");
    comentario.classList.remove("error");
    captchaInput.classList.add("error");
    msg.innerHTML = "Captcha incorrecto";
    generarCaptcha();
  } else {
    // si los campos y el capcha son correctos se remueven todas las clases de error, se envia form y se genera nuevo captcha,
    //por si se quiere consultar nuevamente

    nombre.classList.remove("error");
    apellido.classList.remove("error");
    email.classList.remove("error");
    comentario.classList.remove("error");
    captchaInput.classList.remove("error");
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    comentario.value = "";
    captchaInput.value = "";
    msg.innerHTML = "";
    edad.value = "";
    direccion.value = "";
    tipo.value = "";
    enviaMensaje.innerHTML = "¡Gracias por sla consulta!";
    generarCaptcha();
  }

  //GUARDO LOS DATOS DEL USUARIO Y SI NO HAY NINGUNO SE CREA VECTOR VACÍO
  let usuarioStorage = localStorage.getItem("email", email.value)
  ? JSON.parse(localStorage.getItem("email", email.value))
  : [];

  localStorage.setItem("email", JSON.stringify(usuarioStorage));

/*
//Agrega un evento change a cada elemento form para que se guarde en localStorage cada vez que el usuario realice algún cambio.
nombre.addEventListener("change", guardarEnLocalStorage);
email.addEventListener("change", guardarEnLocalStorage);
comentario.addEventListener("change",guardarEnLocalStorage);

function guardarEnLocalStorage() {
  localStorage.setItem('nombre', nombre.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('comentario', comentario.value);
}
window.addEventListener('load', cargarDesdeLocalStorage);

function cargarDesdeLocalStorage() {
  nombre.value = localStorage.getItem('nombre') || '';
  email.value = localStorage.getItem('email') || '';
  comentario.value = localStorage.getItem('comentario') || '';
}*/
}