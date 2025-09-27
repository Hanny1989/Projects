const LIMIT = 30;
const MAX_POKEMON = 151;
let offset = 0;
let allPokemonDetails = [];

import { renderPokemonCard, bigCard } from './scripts/templates.js';

document.addEventListener("DOMContentLoaded", () => {
  initDex();
  document.getElementById("loadPokemon").addEventListener("click", loadMorePokemon);
  document.getElementById("searchInput").addEventListener("input", handleSearchInput);
  document.getElementById("overlay").addEventListener("click", handleOverlayClick);
});

document.addEventListener("click", handleGlobalClick);

async function initDex() {
  try {
    showLoader();
    const list = await fetchAllPokemon(offset, LIMIT);
    const details = await fetchPokemonDetails(list);
    allPokemonDetails.push(...details);
    displayPokemonCards(details);
    offset += LIMIT;
  } catch (error) {
    console.error("Fehler beim Laden der Pokémon:", error);
  } finally {
    hideLoader();
  }
}

async function loadMorePokemon() {
  if (offset >= MAX_POKEMON) return;

  showLoader();
  const remaining = MAX_POKEMON - offset;
  const fetchLimit = Math.min(LIMIT, remaining);

  try {
    const list = await fetchAllPokemon(offset, fetchLimit);
    const details = await fetchPokemonDetails(list);
    allPokemonDetails.push(...details);
    displayPokemonCards(details, true);
    offset += fetchLimit;
  } catch (error) {
    console.error("Fehler beim Nachladen der Pokémon:", error);
  } finally {
    hideLoader();
  }
}

async function fetchAllPokemon(offset, limit) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}

async function fetchPokemonDetails(pokemonList) {
  const promises = pokemonList.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();

    const speciesRes = await fetch(data.species.url);
    const speciesData = await speciesRes.json();
    const entry = speciesData.flavor_text_entries.find(e => e.language.name === "en");
    data.dexEntry = entry ? entry.flavor_text.replace(/\n|\f/g, ' ') : "No entry available";

    return data;
  });
  return Promise.all(promises);
}

function displayPokemonCards(pokemonDetails, append = false) {
  const content = document.getElementById("dexContent");
  if (!append) content.innerHTML = "";

  pokemonDetails.forEach(pokemon => {
    content.innerHTML += renderPokemonCard(pokemon);
  });

  setupCardClickListeners();
}

function setupCardClickListeners() {
  const cards = document.querySelectorAll(".pokemonCard");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = parseInt(card.getAttribute("data-id"));
      const selected = allPokemonDetails.find(p => p.id === id);
      showBigCard(selected);
    });
  });
}

function showBigCard(pokemon) {
  const overlay = document.getElementById("overlay");
  const container = document.getElementById("bigCardContainer");

  container.innerHTML = bigCard(pokemon);
  overlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function navigatePokemon(currentId, direction) {
  const currentIndex = allPokemonDetails.findIndex(p => p.id === currentId);
  const total = allPokemonDetails.length;

  if (currentIndex === -1) return;

  let newIndex = (currentIndex + direction + total) % total;
  showBigCard(allPokemonDetails[newIndex]);
}


function handleSearchInput(e) {
  const searchTerm = e.target.value.toLowerCase().trim();
  const loadMoreBtn = document.getElementById("loadPokemon");

  if (searchTerm.length < 3) {
    loadMoreBtn.style.display = "block";
    displayPokemonCards(allPokemonDetails);
    return;
  }

  loadMoreBtn.style.display = "none";
  showLoader();

  const filtered = allPokemonDetails.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  displayPokemonCards(filtered);
  hideLoader();
}

function handleGlobalClick(e) {
  const id = e.target.id;

  if (id === "closeOverlay") {
    document.getElementById("bigCardContainer").innerHTML = "";
    document.getElementById("overlay").classList.add("hidden");
    document.body.classList.remove("no-scroll");
  }

  if (id === "arrow-left") {
    const currentId = parseInt(document.querySelector(".bigCard #id").textContent.replace("#", "").trim());
    navigatePokemon(currentId, -1);
  }

  if (id === "arrow-right") {
    const currentId = parseInt(document.querySelector(".bigCard #id").textContent.replace("#", "").trim());
    navigatePokemon(currentId, 1);
  }
}

function handleOverlayClick(e) {
  if (e.target.id === "overlay") {
    e.target.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  }
}

function showLoader() {
  document.getElementById("loaderOverlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function hideLoader() {
  document.getElementById("loaderOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}
