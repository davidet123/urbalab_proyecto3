/* VARIABLES GLOBALES */
let totalCarrito = 0;


// Inicializar datos en la aplicación
let datosAlmacenados = JSON.parse(localStorage.getItem("carritoArray"))
let carritoArray = datosAlmacenados ? [...datosAlmacenados] : [];




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
let items = document.querySelectorAll(".item-compra");

// Ventana información
let info = document.getElementById("info");

// Seleccionar todos los items
let textoInfo = document.querySelector("#info");

// Offset para la ventana de info
const offsetX = 20;
const offsetY = 10;

// Seleccionar carrito
let carrito = document.getElementById("carrito");


// Mostrar etiqueta info
items.forEach((item) => {

  item.addEventListener("mouseover", (e) => {
    let elementoId = item.firstChild.id;
    let objetoSeleccionado = itemArray.find((el) => {
      return el.id == elementoId;
    });

    if (objetoSeleccionado.disponible) {

      info.style.display = "flex";
      info.style.left = `${e.x + offsetX}px`;
      info.style.top = `${e.y + offsetY}px`;
      textoInfo.innerHTML = `<p>${
        objetoSeleccionado.cargo + " " + objetoSeleccionado.nombre
      }</p><p>Precio ${objetoSeleccionado.precio}$</p>`;
    }
  });
});

/* Etiqueta info */
items.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    info.style.left = `${e.x + offsetX}px`;
    info.style.top = `${e.y + offsetY}px`;
  });
});

items.forEach((item) => {
  item.addEventListener("mouseleave", (e) => {
    info.style.display = "none";
  });
});

/* Añadir imágenes */
let posicion = 1;
items.forEach((item) => {
  let persona = document.createElement("img");
  let id = `itemCompra${posicion}`
  persona.setAttribute("src", "img/persona.png");
  persona.setAttribute("id", id);
  persona.setAttribute("draggable", "true");
  persona.setAttribute("alt", "persona");
  item.appendChild(persona);

  // Check si el elemento está en el array
  if(carritoArray.find(el => el.id === id)) {
    persona.style.visibility= "hidden"
  }
  posicion++;
});

/* DRAG & DROP */


// Seleccionar bolsillo para cambiar imagen

let bolsillo = document.getElementById("bolsillo-img")
console.log(bolsillo)


items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    info.style.display = "none";
    e.dataTransfer.setData("text", e.target.id);
    /* elemento = document.getElementById(e.target.id); */
    /* elemento.style.display="none" */
    /* elemento.style.visibility="hidden" */
    bolsillo.src = "img/bolsillo-abierto.png"

  });
});

const permitirDrop = (e) => {
  e.preventDefault();
};

const soltarItem = (e) => {
  e.preventDefault();
  let item = e.dataTransfer.getData("text");
  document.getElementById(item).style.visibility = "hidden";
  let itemArrastrado = itemArray.find((e) => (e.id == item));
  carritoArray.push(itemArrastrado)
  itemArrastrado.disponible = false;
  localStorage.setItem("carritoArray", JSON.stringify(carritoArray));
  bolsillo.src = "img/bolsillo-cerrado.png"
};

// Vaciar carrito

const vaciarCarrito = () => {
  let items = document.querySelectorAll(".item-compra img");
  items.forEach((item) => {
    item.removeAttribute("style");
  });
  itemArray.forEach(item => {
    item.disponible = true
  });
  localStorage.removeItem("carritoArray");
};
