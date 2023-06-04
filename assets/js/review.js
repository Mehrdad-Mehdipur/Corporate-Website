// * Review

const reviewCards = document.querySelectorAll("#review .cards");
const rightArrow = document.querySelector("#review .rightArrow");
const leftArrow = document.querySelector("#review .leftArrow");
const articleCards = document.querySelectorAll("#review .cards .card");
let currentCard = 0;
let maxCards = 3;

function showCards() {
  articleCards.forEach((card, index) => {
    if (index >= currentCard && index < currentCard + maxCards) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Activate and deactivate rightArrow
  if (currentCard + maxCards >= articleCards.length) {
    rightArrow.disabled = true;
    rightArrow.style.pointerEvents = "none";
    rightArrow.style.color = "var(--color-text-secondary)";
  } else {
    rightArrow.disabled = false;
    rightArrow.style.pointerEvents = "visible";
    rightArrow.style.color = "var(--color-text-inverted)";
    leftArrow.style.color = "var(--color-text-inverted)";
  }
  // Activate and deactivate leftArrow
  if (currentCard <= 0) {
    leftArrow.disabled = true;
    leftArrow.style.color = "var(--color-text-secondary)";
    leftArrow.style.pointerEvents = "none";
  } else {
    leftArrow.disabled = false;
    leftArrow.style.pointerEvents = "visible";
  }
}
showCards();

// Go to the next page by clicking on rightArrow
rightArrow.addEventListener("click", () => {
  if (currentCard + maxCards < articleCards.length) {
    currentCard += maxCards;
    showCards();
  } // Set animation
  articleCards.forEach((card) => {
    card.classList.remove("cardVersa");
  });
});

// Go to the next page by clicking on rightArrow
leftArrow.addEventListener("click", () => {
  if (currentCard > 0) {
    currentCard -= maxCards;
    showCards();
  } // Set animation
  articleCards.forEach((card) => {
    card.classList.add("cardVersa");
  });
});

// When Windows<=900 px
function handleResize() {
  if (window.innerWidth <= 900) {
    maxCards = 1;
    currentCard = 0;
  } else {
    maxCards = 3;
    currentCard = 0;
  }
  showCards();
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
