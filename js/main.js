/* VARIABLES GLOBALES */
/* let totalCarrito = 0; */
// let loggedIn = false;


// Inicializar datos en la aplicación


let loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

carritoArray.forEach(el => {
  totalCarrito += el.precio
})

let textoPrecio = document.querySelector("#precio-total p")
textoPrecio.innerHTML = `${totalCarrito} KPW`



// Funcionalidad pasar páginas

// Botones
/* const botonInicio = document.getElementById("botonInicio"); */
const botonEnviar = document.getElementById("enviarForm");

// Referencias a contenedor de cada página

let inicio = document.getElementById("web-inicio");
let formulario = document.getElementById("login-page");
let cargando = document.getElementById("loading-screen");
let aplicacion = document.getElementById("aplicacion");

// Esconder inicio y mostrar formulario acceso

const IniciarWeb = () => {

  bubble.addEventListener("click", (e) => {
    console.log("Inicio")
    e.preventDefault();
    vid.pause();
    vid.currentTime = 0;
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


// AbrirCheckout

// Seleccionar boton checkout
let checkoutCarrito = document.getElementById("checkoutCarrito")

checkoutCarrito.addEventListener("click", () => {
  let checkout = document.getElementById("checkout");
  aplicacion.classList.remove("show");
  aplicacion.classList.add("hide");
  checkout.classList.add("show");
  checkoutContenedor();


})

const irAplicacion = () => {


  checkout.classList.remove("show");
  checkout.classList.add("hide");
  aplicacion.classList.remove("hide");
  aplicacion.classList.add("show");

  let itemsCheckout = document.querySelectorAll(".checkout-item");

  itemsCheckout.forEach(item => {
    item.remove();
  })

}

const finalizar = () => {
  checkout.classList.remove("show");
  checkout.classList.add("hide");
  inicio.classList.add("show");
  inicio.classList.remove("hide");
  botonPeligro.classList.remove("hide");
  botonPeligro.classList.add("show");
  videoPlayer.classList.remove("show");
  videoPlayer.classList.add("hide");


  loggedIn = false;
  localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  IniciarWeb();

}