import { returnAllPokemon } from "./displayAllPokemon";
import SearchBar from "./InputSearchPokemonName.js";
import createCard from "./PokeCards.js";
import { getPokemonWithName } from "./FetchPokemonName";

export function returnSearchedPokemon() {
  getPokemonWithName();
}
