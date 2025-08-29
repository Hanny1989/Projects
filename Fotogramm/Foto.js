


let content = [
  "./imgFoto/alpina.jpg",
  "./imgFoto/BondAuto.jpg",
  "./imgFoto/C_Glossy.jpg",
  "./imgFoto/mk7Vari.jpg"
];

function createOverlay() {
  let overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("overlay");
  overlay.addEventListener("click", toggleOverlayOff);
  document.body.appendChild(overlay);
}

function getOverlay() {
  let overlay = document.getElementById("overlay");
  if (!overlay) {
      createOverlay();
      overlay = document.getElementById("overlay");
  }
  return overlay;
}

function addImagesToOverlay(overlay) {
  overlay.innerHTML = "";
  content.forEach(imgSrc => {
      let img = document.createElement("img");
      img.src = imgSrc;
      img.classList.add("overlayImg");
      overlay.appendChild(img);
  });
}

function toggleOverlayOn() {
  let overlay = getOverlay();
  addImagesToOverlay(overlay);
  overlay.classList.remove("d-none");
}

function toggleOverlayOff() {
  let overlay = document.getElementById("overlay");
  if (overlay) overlay.classList.add("d-none");
}



document.addEventListener("DOMContentLoaded", () => {
  render();
});




