 //Button Menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const burgerMenu = document.getElementById("burgerMenu");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("show");
  });

  const burgerLinks = burgerMenu.querySelectorAll("a");
  burgerLinks.forEach(link => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("show");
    });
  });

  document.addEventListener("click", (e) => {
    if (!burgerBtn.contains(e.target) && !burgerMenu.contains(e.target)) {
      burgerMenu.classList.remove("show");
    }
  });
});

 
 

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    function showSlides(n) {
      if (n >= slides.length) slideIndex = 0;
      if (n < 0) slideIndex = slides.length - 1;

      slides.forEach(slide => slide.style.display = "none");
      dots.forEach(dot => dot.classList.remove("active"));

      slides[slideIndex].style.display = "block";
      dots[slideIndex].classList.add("active");
    }

    function nextSlide() {
      slideIndex++;
      showSlides(slideIndex);
    }

    function prevSlide() {
      slideIndex--;
      showSlides(slideIndex);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        slideIndex = i;
        showSlides(slideIndex);
      });
    });

    prev.addEventListener("click", prevSlide);
    next.addEventListener("click", nextSlide);

    
    setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 5000);

    
    showSlides(slideIndex);

 
   
      
    function savePreferences() {
      let necessary = true;
      let analytics = document.getElementById("analytics").checked;
      let marketing = document.getElementById("marketing").checked;

      let settings = JSON.stringify({ necessary, analytics, marketing });
      console.log("Auswahl:", settings);

      document.getElementById("cookie-banner").style.display = "none";
      applyCookieSettings(settings);
    }

   
    function applyCookieSettings(settings) {
      let prefs = JSON.parse(settings);

      if (prefs.analytics) {
        console.log("Analytics aktiviert");
      
      }

      if (prefs.marketing) {
        console.log("Marketing aktiviert – Werbeskripte werden geladen");
        loadMarketingScripts();
      }
    }

    // Marketing-Skripte dynamisch laden
    function loadMarketingScripts() {
      // Beispiel: Google Ads Conversion Tracking
      let gads = document.createElement("script");
      gads.src = "https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXX"; // Id placeholder
      gads.async = true;
      document.head.appendChild(gads);

      gads.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-XXXXXXX'); // ID marker
      };

      
      let fb = document.createElement("script");
      fb.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function()
        {n.callMethod?n.callMethod.apply(n,arguments):
        n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'DEINE_PIXEL_ID');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fb);
    }

    
    window.onload = function() {
      document.getElementById("cookie-banner").style.display = "block";
    }
