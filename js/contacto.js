let main = document.querySelector("#main");


main.onmouseout = () =>{
  
  main.style.backgroundImage="url(../assets/yoga-telas.jpg)";
}
 main.onmouseover = () =>{
   main.style.background="black";
 }


 let random;
 document.getElementById("send").addEventListener("click", verificarFormulario);
 
 generarCaptcha(); //ni bien carga la pagina llama a la funcion que genera un numero aleatorio (captcha) de 6 digitos
 
 function generarCaptcha() {
   random = Math.floor(Math.random() * (999999 - 100000) + 1); //se genera un numero random de 6 digitos
   //entre 100.000 y 999.999
 
   document.querySelector("#captcha").innerHTML = random;
   // muestro en la etiqueta label con id #captcha el numero random generado
 }
 
 function verificarFormulario(e) {
   e.preventDefault();
   let error = 0;
   // obtengo los elementos del formulario input llamados por id
   let nombre = document.getElementById("nombre");
   let apellido = document.getElementById("apellido");
   let email = document.getElementById("email");
   let comentario = document.getElementById("comentario");
   let msg = document.getElementById("msg");
   let edad = document.getElementById("edad");
   let direccion = document.getElementById("direccion");
   let tipo = document.getElementById("tipo");
   let enviaMensaje = document.getElementById("enviaMensaje");
   let captchaInput = document.getElementById("captchaInput");
   enviaMensaje.innerHTML = ""; //vacio el mensaje mostrado en ejecuciones anteriores
   // verifica que los campos obligatorios (nombre, apellido, correo, consulta) no esten vacios
   // y si encuentra algun vacio le agrega la clase error que le aplica border rojo al imput incompleto
   //y a su vez convierte la variable error en 1 para mas adelante en caso de que la misma sea 1 emita un mensaje
   //de error.
 
   if (nombre.value == "") {
     nombre.classList.add("error");
     error = 1;
   } else {
     // en caso de que verifique que este completo, remueve la clase error para quitar el borde rojo,
     //(en caso de que se le haya aplicado en un intento previo)
     nombre.classList.remove("error");
   }
   if (apellido.value == "") {
     apellido.classList.add("error");
     error = 1;
   } else {
     apellido.classList.remove("error");
   }
   if (email.value == "") {
     email.classList.add("error");
     error = 1;
   } else {
     email.classList.remove("error");
   }
   if (comentario.value == "") {
     comentario.classList.add("error");
     error = 1;
   } else {
     comentario.classList.remove("error");
   }
 
   if (error == 1) {
     // si el error es 1 quiere decir que hay al menos un campo imcompleto, en ese caso se dispara
     //un mensaje de error y generamos un nuevo captcha
     generarCaptcha();
     msg.innerHTML = "Campos incompletos";
   } else if (captchaInput.value != random) {
     //en caso de que los campos no esten incompletos,
     //pero el captcha este mal ingresado, remueve todas las clases de error de los imput,
     //dispara el mensaje de captcha incorrecto y genera un nuevo valor de captcha
 
     nombre.classList.remove("error");
     apellido.classList.remove("error");
     email.classList.remove("error");
     comentario.classList.remove("error");
     captchaInput.classList.add("error");
     msg.innerHTML = "Captcha incorrecto";
     generarCaptcha();
   } else {
     // si los campos y el capcha son correctos se remueven todas las clases de error y se convierten en vacio los campos
     //(input) y se dispara mensaje para indicar que se envio y se vuelve a generar un nuevo captcha,
     //por si se quiere hacer una nueva consulta.
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
     enviaMensaje.innerHTML = "¡Gracias por su consulta!";
     generarCaptcha();
   }
 }
 





