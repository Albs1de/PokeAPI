const createCard = (imgUrl, title, text, btnUrl, btnText) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.width = "18rem";

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = imgUrl;
  img.alt = "Card image cap";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = text;

  const cardBtn = document.createElement("a");
  cardBtn.className = "btn btn-primary";
  cardBtn.href = btnUrl;
  cardBtn.textContent = btnText;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);

  card.appendChild(img);
  card.appendChild(cardBody);

  return card;
};
export default createCard;
