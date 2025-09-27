const images = [
    './imgFinal/alpina.jpg',
    './imgFinal/BondAuto.jpg',
    './imgFinal/C_Glossy.jpg',
    './imgFinal/c_MAXX.jpg',
    './imgFinal/BeSmartChef.png'
];  // Array der Bilder als Konstante 

let currentImageIndex = 0;

const popup = document.getElementById('imagePopup'); 
const popupImg = document.getElementById('popupImg');
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');

const cards = document.querySelectorAll('.card img');  // Wählt die Class .card img aus 
cards.forEach((img, index) => {
    img.addEventListener('click', () => {
        popup.style.display = 'flex';   
        popupImg.src = images[index];
        currentImageIndex = index;
    });
});



prevArrow.addEventListener('click', () => {  // Pfeil zurück
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; 
    popupImg.src = images[currentImageIndex];
});

nextArrow.addEventListener('click', () => {  // Pfeil vor 
    currentImageIndex = (currentImageIndex + 1) % images.length;
    popupImg.src = images[currentImageIndex];
});

window.addEventListener('click', (close) => {  // Klick Ereignis. Pop-Up wird zu gemacht
    if (close.target === popup) {
        popup.style.display = 'none';
    }
});
