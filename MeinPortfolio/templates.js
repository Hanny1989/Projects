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
  