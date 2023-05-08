import { getRandomPokemon } from "./FetchAPIData.js";
import createCard from "./PokeCards.js";

function returnAllPokemon() {
  const cardContainer = document.getElementById("card-container");

  for (let i = 1; i <= 100; i++) {
    getRandomPokemon(i).then(({ pokemonName, imageUrl }) => {
      const card = createCard(
        imageUrl,
        pokemonName,
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "#",
        "Go somewhere"
      );
      cardContainer.appendChild(card);
    });
  }
}
export { returnAllPokemon };
