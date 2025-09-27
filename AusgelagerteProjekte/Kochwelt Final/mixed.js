document.getElementById("calculate").addEventListener("click", updateQuantities); 
ducument.querySelector("")
    
function updateQuantities() {
    
    let portions = parseInt(document.getElementById('person').value, 10);

    if (isNaN(portions)) {
        alert("Bitte geben Sie eine gültige Zahl ein.");
        return;
    }

    if (portions > 20) {
        alert("Die Anzahl der Portionen ist zu hoch! Bitte wählen Sie eine Zahl bis 20.");// Zu hoch Alert
        return;
    }
    
    if (portions < 1) {
        alert("Die Anzahl der Portionen ist zu niedrig! Bitte wählen Sie mindestens 1.");
        return;
    }

    document.getElementById('flour').innerText = (100 * portions) + ' g Mehl';   // Ingredents weren multipliziert 
    document.getElementById('milk').innerText = (200 * portions) + ' ml Milch';
    document.getElementById('eggs').innerText = (1 * portions) + (portions === 1 ? ' Ei' : ' Eier');
    document.getElementById('sugar').innerText = (20 * portions) + ' g Zucker';
    document.getElementById('butter').innerText = (30 * portions) + ' g Butter';
}

document.getElementById("calculate").addEventListener("click", updateQuantities);

function updateQuantities() {
    let portions = document.getElementById('person').value * 1; // Umwandlung in Zahl durch Multiplikation mit 1 parseInt entfällt damit. 

    if (!portions || portions < 1 || portions > 20) {
        alert("Bitte geben Sie eine Zahl zwischen 1 und 20 ein.");
        return;
    }

    document.getElementById('flour').innerText = (100 * portions) + ' g Mehl';
    document.getElementById('milk').innerText = (200 * portions) + ' ml Milch';
    document.getElementById('eggs').innerText = (1 * portions) + (portions === 1 ? ' Ei' : ' Eier');
    document.getElementById('sugar').innerText = (20 * portions) + ' g Zucker';
    document.getElementById('butter').innerText = (30 * portions) + ' g Butter';
}

// Die einfachste Version 
function updateQuantities() {
    let portions = document.getElementById('person').value * 1;

    if (portions < 1 || portions > 20) return alert("Bitte eine Zahl von 1 bis 20 eingeben.");

    document.getElementById('flour').innerText = 100 * portions + ' g Mehl';
    document.getElementById('milk').innerText = 200 * portions + ' ml Milch';
    document.getElementById('eggs').innerText = portions + (portions > 1 ? ' Eier' : ' Ei');
    document.getElementById('sugar').innerText = 20 * portions + ' g Zucker';
    document.getElementById('butter').innerText = 30 * portions + ' g Butter';
}


// ohne Booleans 

function updateQuantities() {
    let portions = document.getElementById('person').value * 1;

    if (!(portions >= 1) + !(portions <= 20)) return alert("Bitte eine Zahl von 1 bis 20 eingeben.");

    document.getElementById('flour').innerText = 100 * portions + ' g Mehl';
    document.getElementById('milk').innerText = 200 * portions + ' ml Milch';
    document.getElementById('eggs').innerText = portions + ([' Ei', ' Eier'][portions > 1 * 1]);
    document.getElementById('sugar').innerText = 20 * portions + ' g Zucker';
    document.getElementById('butter').innerText = 30 * portions + ' g Butter';
}




//Fotogram Script ( Fortgeschritten ) 

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".pics");
    images.forEach(img =>
      img.addEventListener("click", () => {
        images.forEach(i => i.classList.remove("highlighted"));
        img.classList.add("highlighted");
      })
    );
  
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="prev">&#10094;</span>
        <img class="modal-img" />
        <span class="next">&#10095;</span>
      </div>`;
    document.body.appendChild(modal);
  
    let [prev, next, modalImage] = [
      modal.querySelector(".prev"),
      modal.querySelector(".next"),
      modal.querySelector(".modal-img")
    ];
  
    let currentIndex = 0;
  
    const openModal = index => {
      currentIndex = index;
      modalImage.src = images[currentIndex].src;
      modal.style.display = "flex";
    };
  
    const updateImage = step => {
      currentIndex = (currentIndex + step + images.length) % images.length;
      modalImage.src = images[currentIndex].src;
    };
  
    const closeModal = e => {
      if (e.target === modal) modal.style.display = "none";
    };
  
    images.forEach((img, idx) => img.addEventListener("click", () => openModal(idx)));
    prev.addEventListener("click", () => updateImage(-1));
    next.addEventListener("click", () => updateImage(1));
    modal.addEventListener("click", closeModal);
  });



