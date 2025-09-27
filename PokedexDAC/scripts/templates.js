export function renderPokemonCard(pokemon) {
  let { name, id, height, weight } = pokemon;
  let types = pokemon.types.map((t) => t.type.name);
  let spriteUrl = pokemon.sprites.other["home"].front_default;
  let mainType = types[0];
  let subType = types[1];
  let typeClass = `bg-${mainType}`;

  return `
    <div class="pokemonCard ${typeClass}" id="pokemonCard" data-id="${id}">

     <div class="pokemonIdentity">
    <h2 id="pokemonName">${capitalize(name)}</h2>
    <h2 id="pokemonId">#${id}</h2>
    </div>
    <img class="pokemonSprite" id="sprites" src="${spriteUrl}" alt="" alt="">
   
    <div>
    <h3 class="pokemonType" id="PokemonType"><strong>Type:</strong>${types}</h3>
    </div>
    <section class="iconSection">
    <img class="icon" src="./Assets/icons/${mainType}.png" alt="${mainType} Icon">
        ${
          subType
            ? `<img class="icon" src="./Assets/icons/${subType}.png" alt="${subType} Icon">`
            : ""
        }
    </section>
    <div class="pokemonSpecs">
    <h3 id="pokemonHeight">Height: ${height + '"'}</h3>
    <br></br>
    <h3 id="pokemonWeight">Weight: ${weight}</h3>
    </div>
    </div>`;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function bigCard(pokemon) {
  let { name, id, height, weight, dexEntry } = pokemon;
  let types = pokemon.types.map((t) => t.type.name);
  let spriteUrl = pokemon.sprites.other["home"].front_default;
  let mainType = types[0];
  let subType = types[1];

  return `
    <section id="bigCard" class="bigCard">
    <button class="close-button" id="closeOverlay">&times;</button>
      <img class="banner banner-dpNoe" src="./Assets/Big_cards/Big_card-7_${mainType}.png" alt="" />
       
      <div class="sameSpace">
      <div class="cardNav">
        <button class="navBtn" id="arrow-left"><</button>
        <button class="navBtn" id="arrow-right">></button>
      </div>
        <div class="Identity">
          <p id="id"># ${id}</p>
          <p id="name">${capitalize(name)}</p>
        </div>
        <img id="pokemon" src="${spriteUrl}" alt="${name}" style="height: 150px;" width="150px">
      </div>
      <div class="sameSpace">
        <div>
          <p id="height">Height: ${height}</p>
          <p id="weight">Weight: ${weight}</p>
        </div>
        <p id="dexEntry">${dexEntry}</p>
      </div>
      <div class="sameSpace">
        <table>
          <tr><td>Type:</td><td>${types.join(" / ")}</td></tr>
          <tr><td>HP:</td><td>${pokemon.stats[0].base_stat}</td></tr>
          <tr><td>Atk:</td><td>${pokemon.stats[1].base_stat}</td></tr>
          <tr><td>Spez. Atk:</td><td>${pokemon.stats[3].base_stat}</td></tr>
          <tr><td>Def:</td><td>${pokemon.stats[2].base_stat}</td></tr>
          <tr><td>Spez. Def:</td><td>${pokemon.stats[4].base_stat}</td></tr>
          <tr><td>Init:</td><td>${pokemon.stats[5].base_stat}</td></tr>
        </table>
      </div>
    </section>`;
}
