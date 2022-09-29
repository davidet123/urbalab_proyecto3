let vid = document.getElementById("video1");
let botonPeligro = document.getElementById("boton-peligro");
let videoPlayer = document.getElementById("videoPlayer");

// VIdeo inicio
const playVideo = () => {
  botonPeligro.classList.remove("show");
  botonPeligro.classList.add("hide");
  videoPlayer.classList.remove("hide");
  videoPlayer.classList.add("show");
  vid.play();
}


// Burbuja en pantalla inicio

let bubble = document.getElementById("bubble");

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

let incX = 3;
let incY = 3;

const bubbleMove = () => {
setInterval(() => {
  bubble.style.left = `${posX}px`;
  bubble.style.top = `${posY}px`;
  posX += incX;
  posY += incY;

  if(posX >= window.innerWidth - 40 || posX <= 0) {
    incX *= -1
  } 
  if(posY >= window.innerHeight -40 || posY <= 0) {
    incY *= -1
  }

},50)
}


// Animar burbuja

bubbleMove();