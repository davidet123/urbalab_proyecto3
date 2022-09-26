/* VARIABLES GLOBALES */
let totalCarrito = 0;
// let loggedIn = false;


// Inicializar datos en la aplicación


let loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

carritoArray.forEach(el => {
  totalCarrito += el.precio
})

let textoPrecio = document.querySelector("#precio-total p")
textoPrecio.innerHTML = `${totalCarrito} $`



// Funcionalidad pasar páginas

// Botones
const boton = document.getElementById("boton1");
const botonEnviar = document.getElementById("enviarForm");

// Referencias a contenedor de cada página

let inicio = document.getElementById("web-inicio");
let formulario = document.getElementById("login-page");
let cargando = document.getElementById("loading-screen");
let aplicacion = document.getElementById("aplicacion");

// Esconder inicio y mostrar formulario acceso

const IniciarWeb = () => {

  boton.addEventListener("click", (e) => {
    e.preventDefault();
    inicio.classList.remove("show");
    inicio.classList.add("hide");
    formulario.classList.add("show");
  });
  
  // Esconder formulario y mostrar la aplicación
  
  botonEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    formulario.classList.remove("show");
    formulario.classList.add("hide");
    cargando.classList.add("show");
    loggedIn = true;
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    Carga();
  });


};


// Abrir Aplicación

const AbrirAplicacion = () => {
  inicio.classList.remove("show");
  cargando.classList.remove("show");
  cargando.classList.add("hide");
  aplicacion.classList.add("show");

}


// Comprobar si el usuario está logueado

if (loggedIn) {
  inicio.classList.add("hide");
  formulario.classList.add("hide");
  cargando.classList.add("show");
  Carga();
} else {
  inicio.classList.add("show");
  IniciarWeb();
}

