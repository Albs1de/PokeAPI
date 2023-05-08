"use strict";

function getPokemonWithName(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const pokemonName = data.name;
      const imageUrl = data.sprites.front_default;

      return { pokemonName, imageUrl };
    });
}
export { getPokemonWithName };
