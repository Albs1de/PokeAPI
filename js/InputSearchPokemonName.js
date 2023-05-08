"use strict";

function SearchBar() {
  const InputDiv = document.createElement("div");
  InputDiv.className = "input-div";
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Suche nach einem Pokemon!";

  const inputButton = document.createElement("button");
  inputButton.className = "input-button";
  inputButton.style.background = "none";
  inputButton.style.border = "none";
  inputButton.style.padding = 0;
  const btnImage = document.createElement("img");
  btnImage.src = "../images/pokeball_closed.png";
  btnImage.alt = "Pokeball";
  btnImage.width = 50;
  btnImage.height = 50;

  inputButton.appendChild(btnImage);

  // Change Button Image Pokeball Open or Closed
  function changeBtnImage(btnImage) {
    if (btnImage.src.includes("closed")) {
      btnImage.src = "../images/pokeball_open.png";
    } else {
      btnImage.src = "../images/pokeball_closed.png";
    }
  }

  // Change Button Image Pokeball Open or Closed if Input_Focus
  function inputBtnFocus(focus) {
    if (focus === "focus") {
      btnImage.src = "../images/pokeball_closed.png";
    }
  }

  // EventListener for Input
  searchInput.addEventListener("focus", () => {
    inputBtnFocus("focus");
  });

  //Event-Listener für Button
  inputButton.addEventListener("click", () => {
    changeBtnImage(btnImage);
  });

  InputDiv.appendChild(searchInput);
  InputDiv.appendChild(inputButton);
  return InputDiv;
}

export default SearchBar;
