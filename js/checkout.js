// Seleccionar contenedor del checkout

let checkoutContenedor = () => {
  let cuerpo = document.getElementById("checkout-cuerpo");
  carritoArray.forEach(item => {
    let checkoutItem = document.createElement("div");
    checkoutItem.classList.add("checkout-item");

    let checkoutNombre = document.createElement("div");
    checkoutNombre.classList.add("checkout-nobre");
    let checkoutPrecio = document.createElement("div");
    checkoutPrecio.classList.add("checkout-precio");
    
    checkoutItem.appendChild(checkoutNombre);
    checkoutItem.appendChild(checkoutPrecio);
    
    checkoutNombre.innerHTML = item.nombre;
    checkoutPrecio.innerHTML = item.precio;
    cuerpo.appendChild(checkoutItem);
    

  })
  
}




/* <div class="checkout-item">
          <div class="checkout-nombre"></div>
          <div class="checkout-precio"></div>
        </div> */