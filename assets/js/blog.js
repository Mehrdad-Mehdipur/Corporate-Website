let titles = document.querySelectorAll("#blog .description h3");
const descriptions = document.querySelectorAll("#blog .description p");
const newBlog = document.querySelector("#blog .newBlog .description p");

// Title length less than 85 characters
titles.forEach((title) => {
  document.addEventListener("DOMContentLoaded", function () {
    if (title.innerHTML.length > 85) {
      title.innerHTML = title.innerHTML.substring(0, 85);
    }
  });
});

// Descriptions length less than 60 characters
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

    if (index === 2 && window.innerWidth > 768) {
      description.innerHTML = originalTexts[index].slice(0, 300) + "...";
    }
  });
}

window.addEventListener("resize", handleDescriptions);
document.addEventListener("DOMContentLoaded", () => {
  handleOriginalText();
  handleDescriptions();
});
