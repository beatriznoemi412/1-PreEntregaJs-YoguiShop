let seleccion = prompt("Hola, necesitas comprar algún producto: si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor, ingresá sí o no");
  seleccion = prompt("Hola, necesitas comprar?: si o no");
}

if (seleccion == "si") {
  alert("En sección Productos podrás encontrar todo nuestro stock.");
} else if (seleccion == "no") {
  alert("gracias por visitarnos, hasta pronto!!");
}
