let datosAlmacenados = JSON.parse(localStorage.getItem("carritoArray"))
let carritoArray = datosAlmacenados ? [...datosAlmacenados] : [];
let totalCarrito = 0;


// Event listener para items compra
let items = document.querySelectorAll(".item-compra");

// Ventana información
let info = document.getElementById("info");

// Seleccionar todos los items
let textoInfo = document.getElementById("info");

// Offset para la ventana de info
const offsetX = 20;
const offsetY = 10;

// Seleccionar carrito
let carrito = document.getElementById("carrito");
console.log(carrito)

// Seleccionar bolsillo 

let bolsillo = document.getElementById("bolsillo-img");

// Seleccionar carrito
let resetCarrito = document.getElementById("resetCarrito");








/* Lanzar aplicaión */
const cargarAplicacion = () => {
  /* console.log(data.objects) */
  
  
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
         textoInfo.innerHTML = `<h3>${
           objetoSeleccionado.cargo}</h3><h4> ${objetoSeleccionado.nombre
         }</h4><p>Precio ${objetoSeleccionado.precio} KPW</p>`;
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
   /* let bolsillo = document.getElementById("bolsillo-img") */
   
   
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
   
   
   bolsillo.addEventListener("dragover", e => e.preventDefault());


   /* const permitirDrop = (e) => {
     e.preventDefault();
   }; */
   
   
   bolsillo.addEventListener("drop", e => {
     e.preventDefault();
     let item = e.dataTransfer.getData("text");
     document.getElementById(item).style.visibility = "hidden";
     let itemArrastrado = itemArray.find((e) => (e.id == item));
   
     /* Añadir precio */ 
   
     /* console.log(carritoArray) */
     /* console.log(itemArrastrado.precio) */
     totalCarrito += itemArrastrado.precio;
     textoPrecio.innerHTML = `${totalCarrito} KPW`
     carritoArray.push(itemArrastrado)
     /* console.log(carritoArray) */
     itemArrastrado.disponible = false;
     localStorage.setItem("carritoArray", JSON.stringify(carritoArray));
     bolsillo.src = "img/bolsillo-cerrado.png"
   });
   
   /* const soltarItem = (e) => {
     e.preventDefault();
     let item = e.dataTransfer.getData("text");
     document.getElementById(item).style.visibility = "hidden";
     let itemArrastrado = itemArray.find((e) => (e.id == item)); */
   
     /* Añadir precio */ 
   
     /* console.log(itemArrastrado)
     console.log(itemArrastrado.precio) */
    /*  totalCarrito += itemArrastrado.precio;
     textoPrecio.innerHTML = `${totalCarrito} $`
     carritoArray.push(itemArrastrado)
     itemArrastrado.disponible = false;
     localStorage.setItem("carritoArray", JSON.stringify(carritoArray));
     bolsillo.src = "img/bolsillo-cerrado.png"
   }; */
   
   // Vaciar carrito

 }

 let datosArray = JSON.parse(localStorage.getItem("itemArray"))
let itemArray = datosArray ? [...datosArray] : [];

itemArray.length == 0 ? fetchItems() : cargarAplicacion();




resetCarrito.addEventListener("click", () => {
  let items = document.querySelectorAll(".item-compra img");
  items.forEach((item) => {
    item.removeAttribute("style");
  });
  itemArray.forEach(item => {
    item.disponible = true
  });
  textoPrecio.innerHTML = "0 KPW"
  localStorage.removeItem("carritoArray");
  localStorage.removeItem("itemArray");
  totalCarrito = 0;
  carritoArray = [];
  itemArray = [];

  items.forEach(item => {
    item.remove();
  })


  fetchItems();
});


/* const vaciarCarrito = () => {
  let items = document.querySelectorAll(".item-compra img");
  items.forEach((item) => {
    item.removeAttribute("style");
  });
  itemArray.forEach(item => {
    item.disponible = true
  });
  textoPrecio.innerHTML = "0 $"
  localStorage.removeItem("carritoArray");
}; */


