

const container = document.getElementById("project-container");


const projects = [
  {
    title: "Projekt A",
    description: "Ein schöner Nachbau einer Kochweltseite.",
    image: "images/logo_small.png",
    link: "http://127.0.0.1:5501/Kochwelt%20Final/KochweltFinal.html"
  },
  {
    title: "Projekt B",
    description: "Ein JSON mit Local Storage Funktion.",
    image: "images/notizblock.jpg",
    link: "http://127.0.0.1:5501/Notizblock/notes.html"
  },
  {
    title: "Projekt C",
    description: "Ein Mini-Spiel mit Canvas.",
    image: "images/Pong.png",
    link: "http://127.0.0.1:5501/Pong/Pong.html"
  }
];


projects.forEach(proj => {
  const card = createProjectCard(proj);
  card.classList.add("hidden");
  container.appendChild(card);
  observe(card);
});


function observe(element) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(element);
}


const body = document.body;
const toggleBtn = document.getElementById("toggle-theme");

function setTheme(mode) {
  if (mode === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  localStorage.setItem("theme", mode);
}

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

setTheme(localStorage.getItem("theme") || "light");




export function createProjectCard({ title, description, image, link }) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${image}" alt="${title}" />
    <h3>${title}</h3>
    <p>${description}</p>
    <a href="${link}" target="_blank">Zum Projekt</a>
  `;
  return card;
}
