// Seleccionar contenedor del checkout



let checkoutContenedor = () => {
  carritoArray.forEach(item => {
    nuevoItem(item.nombre, item.precio)
  })
  nuevoItem("Total", totalCarrito)

  
}

const nuevoItem = (nombre, precio) => {
  let cuerpo = document.getElementById("checkout-cuerpo");
  let checkoutItem = document.createElement("div");
    checkoutItem.classList.add("checkout-item");

    let checkoutNombre = document.createElement("div");
    checkoutNombre.classList.add("checkout-nobre");
    
    let checkoutPrecio = document.createElement("div");
    checkoutPrecio.classList.add("checkout-precio");
    
    if(nombre == "Total") {
      checkoutItem.classList.add("checkout-total");
    }
    checkoutItem.appendChild(checkoutNombre);
    checkoutItem.appendChild(checkoutPrecio );
    
    checkoutNombre.innerHTML = nombre;
    checkoutPrecio.innerHTML = precio + " KPW";
    cuerpo.appendChild(checkoutItem);

}






/* <div class="checkout-item">
          <div class="checkout-nombre"></div>
          <div class="checkout-precio"></div>
        </div> */