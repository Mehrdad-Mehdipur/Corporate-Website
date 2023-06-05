//* Portfolio

const gallery = document.querySelector("#portfolio .gallery");
const imageBoxes = document.querySelectorAll("#portfolio .imageBox");
const images = document.querySelectorAll("#portfolio .imageBox img");
const display = document.querySelector("#portfolio .display");
const mainImage = document.querySelector("#portfolio .display .displayImg");
const displayImage = document.querySelector("#portfolio .display img");
const displayTitle = document.querySelector("#portfolio .display p");
const closeBtn = document.querySelector("#portfolio .closeBtn");
const nextBtn = document.querySelector("#portfolio .arrowBtn .nextSlide");
const prevBtn = document.querySelector("#portfolio .arrowBtn .prevSlide");
let index = 0;

// show image clicked in display div
imageBoxes.forEach((imageBox, index) => {
  imageBox.addEventListener("click", () => {
    const imageBoxImage = imageBox.querySelector("img").src;
    const imageBoxP = imageBox.querySelector("p").textContent;

    displayImage.src = imageBoxImage;
    displayTitle.textContent = imageBoxP;

    // set Display animation
    mainImage.classList.add("showDisplay");
    setTimeout(() => {
      mainImage.classList.remove("showDisplay");
    }, 800);

    // When Windows<=900px =========

    // Open full size clicked image
    if (window.innerWidth < 900) {
      display.classList.add("show");
    }

    // Close full size image
    closeBtn.addEventListener("click", () => {
      display.classList.remove("show");
    });

    // View photos with next and previous btn
    function init() {
      nextBtn.addEventListener("click", () => {
        next("next");
      });
      prevBtn.addEventListener("click", () => {
        next("prev");
      });
    }
    function next(direction) {
      if (direction == "next") {
        index++;
        if (index == imageBoxes.length) {
          index = 0;
        }
      } else {
        if (index == 0) {
          index = imageBoxes.length - 1;
        } else {
          index--;
        }
      }
      displayImage.src = images[index].src;
      displayTitle.textContent = imageBoxes[index].textContent;
    }
    init();
  });
});
