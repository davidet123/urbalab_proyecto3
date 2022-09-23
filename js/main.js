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

 // Ventana información
 let info = document.getElementById("info");

 // Seleccionar todos los items
 let textoInfo = document.querySelector("#info")

// Offset para la ventana de info
 const offsetX = 20;
 const offsetY = 10;

 // Seleccionar carrito
 let carrito = document.getElementById("carrito")


 items.forEach(item => {
  item.addEventListener("mouseover", (e) => {
    info.style.display="block"
    info.style.left = `${e.x + offsetX}px`
    info.style.top = `${e.y+ offsetY}px`
    textoInfo.innerHTML = `<p>Posición X${e.x + offsetX}px</p><p>Posición Y${e.y + offsetX}px</p>`
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
    info.style.display="none"
  })
 });


 let posicion = 1
  items.forEach(item => {
    let nuevoItem = document.createElement("img")
    nuevoItem.setAttribute("src", "img/item.png")
    nuevoItem.setAttribute("id", `itemCompra${posicion}`)
    item.appendChild(nuevoItem)
    posicion ++
  })




 items.forEach(item => {
  item.addEventListener("dragstart", e => {
    console.log(e)
    info.style.display = "none";
    e.dataTransfer.setData("text", e.target.id)
    console.log(e.target.id)
  })
 });



 const permitirDrop = e => {
  e.preventDefault();
 };
 const soltarItem = e => {
  e.preventDefault();

  let item = data = e.dataTransfer.getData("text");
  console.log(item)

 }

 /* carrito,addEventListener("dragover", e => {
  e.preventDefault();
  console.log("dragover")
 }) */
 

