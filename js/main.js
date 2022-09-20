const boton = document.getElementById("boton1")
const botonEnviar = document.getElementById("enviarForm")

let inicio = document.getElementsByClassName("web-inicio")
let formulario = document.getElementsByClassName("login-page")
let aplicacion = document.getElementsByClassName("aplicacion")

boton.addEventListener("click", e => {
  e.preventDefault();
  console.log(inicio)
  inicio[0].style.display = "none"
  formulario[0].style.display = "flex"

})

botonEnviar.addEventListener("click", e => {
  e.preventDefault();
  formulario[0].style.display = "none"
  aplicacion[0].style.display = "flex"

})