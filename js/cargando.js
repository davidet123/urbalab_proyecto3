// Seleccionar barra de carga

let barraCarga = document.querySelector(".barra-carga");

let porcentaje = 0;

const Carga = () => {
  porcentaje = 0;
  setInterval(() => {
  barraCarga.style.width = `${porcentaje}%`
  if (porcentaje == 100) {
    clearInterval(Carga);
    AbrirAplicacion();
  }
  porcentaje ++
}, 20)
};



