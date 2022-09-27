// Seleccionar barra de carga

let barraCarga = document.querySelector(".barra-carga");
// console.log(barraCarga)

let porcentaje = 0;

const Carga = () => {
  porcentaje = 0;
  setInterval(() => {
  barraCarga.style.width = `${porcentaje}%`
  if (porcentaje == 1) {
    clearInterval(Carga);
    AbrirAplicacion();
  }
  porcentaje ++
}, 50)
};



