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




// Event listener para items compra
 let items = document.querySelectorAll(".item-compra")

 let info = document.getElementById("info");
 let textoInfo = document.querySelector("#info p")


 const offsetX = 20;
 const offsetY = 10;

 items.forEach(item => {
  item.addEventListener("mouseover", (e) => {
    console.log(e)
    info.style.display="block"
    info.style.left = `${e.x + offsetX}px`
    info.style.top = `${e.y+ offsetY}px`
    textoInfo.innerHTML = `${e.x + offsetX}px`
    /* info.style.left = e.clientX  */
  })
 });

 items.forEach(item => {
  item.addEventListener("mousemove", (e) => {
    info.style.left = `${e.x  + offsetX}px`
    info.style.top = `${e.y  + offsetY}px`
  })
 });

 items.forEach(item => {
  item.addEventListener("mouseleave", (e) => {
    console.log(e)
    info.style.display="none"
  })
 });

 // Mostrar ventana info al pasar el cursor por encima del elemento



