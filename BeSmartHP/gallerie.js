document.addEventListener("DOMContentLoaded", function () {
    const images = [
        './img/alpina.jpg',
        './img/BondAuto.jpg',
        './img/C_Glossy.jpg',
        './img/c_MAXX.jpg',
        './img/alpina.jpg',
        './img/glossyStar.jpg',
        './img/mk7Vari.jpg',
        './img/alpina.jpg',
        './img/alpina.jpg',
        './img/alpina.jpg'
    ];

    let currentIndex = 0;
    const sliderContainer = document.getElementById("slider_container");
    const imageElements = sliderContainer.getElementsByTagName("img");
    
    function updateImages() {
        images.forEach((src, index) => {
            if (imageElements[index]) {
                imageElements[index].src = src;
                imageElements[index].alt = `Bild ${index + 1}`;
                imageElements[index].classList.add("hover-effect");
                imageElements[index].addEventListener("click", () => openInNewWindow(index));
            }
        });
    }
    
    function openInNewWindow(index) {
        currentIndex = index;
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html>
            <head>
                <title>Bildansicht</title>
                <style>
                    body { 
                    display: flex;
                     align-items: center;
                      justify-content: center;
                       height: 100vh; 
                       background-color:black;
                        margin: 0;
                         }
                    .navigation {
                     position: fixed;
                      top: 50%;
                       transform: 
                       translateY(-50%);
                        font-size: 2rem;
                         cursor: pointer;
                          color: white;
                           background: none;
                            border:
                             none; }
                    #prev { left: 10px; }
                    #next { right: 10px; }
                    #close { 
                    position:
                     fixed; 
                     top: 10px; 
                     right: 10px; 
                     font-size: 2rem; 
                     cursor: pointer; 
                     color: white; 
                     background: none;
                    border: none; }
                    img {
                     max-width: 90%; max-height: 90vh; 
                     }
                     mouse:hover{
                     cursor:pointer;}
                </style>
            </head>
            <body>
                <button id="prev" class="navigation">❮</button>
                <img id="lightboxImage" src="${images[currentIndex]}" alt="Großansicht">
                <button id="next" class="navigation">❯</button>
                <button id="close">✖</button>
                <script>
                    let images = ${JSON.stringify(images)};
                    let currentIndex = ${currentIndex};
                    document.getElementById("prev").addEventListener("click", function() {
                        currentIndex = (currentIndex - 1 + images.length) % images.length;
                        document.getElementById("lightboxImage").src = images[currentIndex];
                    });
                    document.getElementById("next").addEventListener("click", function() {
                        currentIndex = (currentIndex + 1) % images.length;
                        document.getElementById("lightboxImage").src = images[currentIndex];
                    });
                    document.getElementById("close").addEventListener("click", function() {
                        window.close();
                    });
                </script>
            </body>
            </html>
        `);
    }
    
    updateImages();
});
