let vid = document.getElementById("video1");
let botonPeligro = document.getElementById("boton-peligro");
let videoPlayer = document.getElementById("videoPlayer");

console.log(videoPlayer)

const playVideo = () => {
  botonPeligro.classList.remove("show");
  botonPeligro.classList.add("hide");
  videoPlayer.classList.remove("hide");
  videoPlayer.classList.add("show");



  vid.play();
}

let bubble = document.getElementById("bubble");

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

let incX = 5;
let incY = 5;

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

bubbleMove();

// info.style.left = `${e.x + offsetX}px`;
//          info.style.top = `${e.y + offsetY}px`;

