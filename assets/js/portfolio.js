//* Portfolio

const gallery = document.querySelector("#portfolio .gallery");
const imageBoxes = document.querySelectorAll("#portfolio .imageBox");
const images = document.querySelectorAll("#portfolio .imageBox img");
const display = document.querySelector("#portfolio .display");
const displayImage = document.querySelector("#portfolio .display img");
const displayTitle = document.querySelector("#portfolio .display p");
const closeBtn = document.querySelector("#portfolio .closeBtn");
const nextBtn = document.querySelector("#portfolio .arrowBtn .nextSlide");
const prevBtn = document.querySelector("#portfolio .arrowBtn .prevSlide");
let index = 0;

imageBoxes.forEach((imageBox, index) => {
  imageBox.addEventListener("click", () => {
    const imageBoxImage = imageBox.querySelector("img").src;
    const imageBoxP = imageBox.querySelector("p").textContent;

    displayImage.src = imageBoxImage;
    displayTitle.textContent = imageBoxP;

    // ==========  In Max-width 900px ==========

    // View full size clicked photo
    if (window.innerWidth < 900) {
      (closeBtn, display).style.display = "block";
      gallery.style.display = "none";
    }

    // Close the opened photo with the close btn and display the gallery again 
    closeBtn.addEventListener("click", () => {
      gallery.style.display = "block";
      (closeBtn, display).style.display = "none";
    })

    // View photos with next and previous btn
    function init() {
      nextBtn.addEventListener("click", () => { next("next") });
      prevBtn.addEventListener("click", () => { next("prev") });
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


