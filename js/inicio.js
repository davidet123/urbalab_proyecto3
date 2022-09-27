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



