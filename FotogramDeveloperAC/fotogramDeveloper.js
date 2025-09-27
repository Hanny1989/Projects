let content = [
    "./imgFoto/komprimierteBilder/alpina.jpg",
    "./imgFoto/komprimierteBilder/BondAuto.jpg",
    "./imgFoto/komprimierteBilder/seatHigh.jpg",
    "./imgFoto/komprimierteBilder/C_Glossy.jpg",
    "./imgFoto/komprimierteBilder/mk7Vari.jpg",
    "./imgFoto/komprimierteBilder/variFlower.jpg",
  ];

  let currentIndex = 0;

  function render() {
   
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // KEin doppeltes Rendern 
    for (let index = 0; index < content.length; index++) {
      contentDiv.innerHTML += getNotesHTML(index);//css style im JS Format (vorbereitende function)
    }

    document.querySelectorAll(".single_element").forEach((element, index) => {
      element.addEventListener("click", () => showOverlay(index));
    });
  }

  

  function getNotesHTML(index) {// übergebende css function
    return `
        <div class="single_element" data-index="${index}">
            <img src="${content[index]}" alt="Bild" style="width: 100%; height: 100%;">
        </div>
    `;
  }



  function showOverlay(index) {// overlay function
    currentIndex = index;
    updateOverlayImage();
    document.getElementById("overlay").style.display = "flex";
  }

  function updateOverlayImage() {
   let overlayContainer = document.getElementById("overlay-images");
   overlayContainer.innerHTML = `<img src="${content[currentIndex]}" alt="Bild" id="overlay-img">`;

   let img = document.getElementById("overlay-img");

};


  function nextImage() {
    currentIndex = (currentIndex + 1) % content.length;
    updateOverlayImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + content.length) % content.length;
    updateOverlayImage();
  }

  function toggleOverlay() {
    document.getElementById("overlay").style.display = "none";  // schließen des overlays 
  }

  render();