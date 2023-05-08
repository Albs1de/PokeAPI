"use strict";

function getPokemonWithName(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.name);
    });
}
export { getPokemonWithName };
