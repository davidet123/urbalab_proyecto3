// Funcionalidad pasar páginas

// Botones
const boton = document.getElementById("boton1");
const botonEnviar = document.getElementById("enviarForm");

// Referencias a contenedor de cada página

let inicio = document.getElementById("web-inicio");
let formulario = document.getElementById("login-page");
let aplicacion = document.getElementById("aplicacion");

// Esconder inicio y mostrar formulario acceso

boton.addEventListener("click", (e) => {
  e.preventDefault();
  inicio.classList.add("hide");
  formulario.classList.add("show");
});

// Esconder formulario y mostrar la aplicación

botonEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  formulario.classList.remove("show");
  aplicacion.classList.add("show");
});


console.log("test")
