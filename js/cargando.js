// Seleccionar barra de carga

let barraCarga = document.querySelector(".barra-carga");
console.log(barraCarga)

let porcentaje = 0;

const Carga = () => {
  setInterval(() => {
  barraCarga.style.width = `${porcentaje}%`
  if (porcentaje == 100) {
    clearInterval(Carga);
    AbrirAplicacion();
  }
  porcentaje ++
}, 50)
};



