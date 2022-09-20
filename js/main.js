const boton = document.getElementById("boton1")

let inicio = document.getElementsByClassName("web-inicio")
let formulario = document.getElementsByClassName("login-page")

boton.addEventListener("click", e => {
  e.preventDefault();
  console.log(inicio)
  inicio[0].style.display = "none"
  formulario[0].style.display = "flex"

})