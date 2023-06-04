//* Faq

// ========== Setting maximum title length ==========
let titles = document.querySelectorAll("#blog .description a");
const newBlog = document.querySelector("#blog .newBlog .description p");

titles.forEach((title) => {
  document.addEventListener("DOMContentLoaded", function () {
    if (title.innerHTML.length > 85) {
      title.innerHTML = title.innerHTML.substring(0, 85);
    }
  });
});

// ========== Setting maximum description length ==========
const descriptions = document.querySelectorAll("#blog .description p");
let originalTexts = [];

function handleOriginalText() {
  descriptions.forEach((description) => {
    originalTexts.push(description.innerHTML);
  });
}

function handleDescriptions() {
  descriptions.forEach((description, index) => {
    if (window.innerWidth <= 900) {
      description.innerHTML = originalTexts[index].slice(0, 100) + "...";
    } else {
      description.innerHTML = originalTexts[index];
      description.innerHTML = description.innerHTML.slice(0, 140) + "...";
    }

    if (index === descriptions.length - 1 && window.innerWidth > 768) {
      description.innerHTML = originalTexts[index].slice(0, 300) + "...";
    }
  });
}

window.addEventListener("resize", handleDescriptions);
document.addEventListener("DOMContentLoaded", () => {
  handleOriginalText();
  handleDescriptions();
});
