
let tarotDeck;
setup();

async function setup() {
  const res = await fetch('tarot.json');
  tarotDeck = await res.json();
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");
  drawRandomCard();
}

function drawRandomCard() {
  // TODO make true random
  const randomIndex = Math.floor(Math.random() * tarotDeck.length);
  const card = tarotDeck[randomIndex];
  const cardDisplay = document.getElementById('card-display');

  const cardSuitHtml = card.suit ? `<h3 style="border-right: 1px solid #f0f0f0; padding-right: 0.4rem;">${card.suit}</h3>` : '';
  cardDisplay.innerHTML = `
    <h2>${card.name}</h2>
    <div style="display: flex; flex-direction: row; justify-content: center; gap: 0.4rem;"> 
      ${cardSuitHtml}
      <h3 style="border-right: 1px solid #f0f0f0; padding-right: 0.4rem;" >${card.arcana}</h3>
      <h3>${card.number}</h3>
    </div>
    <img src="/tarot/cards/${card.image}">
  `;
}