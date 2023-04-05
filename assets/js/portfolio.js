// const imageBoxes = document.querySelectorAll("#portfolio .imageBox");
// const displayImage = document.querySelector("#portfolio .display img");
// const displayTitle = document.querySelector("#portfolio .display p");

// imageBoxes.forEach((imageBox) => {
//   imageBox.addEventListener("click", () => {
//     const imageBoxImage = imageBox.querySelector("img").src;
//     const imageBoxP = imageBox.querySelector("p").textContent;

//     displayImage.src = imageBoxImage;
//     displayTitle.textContent = imageBoxP;
//   });
// });

// ----------------------------------------------------------------------------------------------

const imageBoxes = document.querySelectorAll("#portfolio .imageBox");
const displayImage = document.querySelector("#portfolio .display img");
const displayTitle = document.querySelector("#portfolio .display p");
const displayClass = document.querySelector("#portfolio .display");
const closeBtn = document.querySelector("#portfolio .closeBtn");
const galleryClass = document.querySelector("#portfolio .gallery");
const arrowBtn = document.querySelector("#portfolio .arrowBtn");
const nextBtn = document.querySelector("#portfolio .arrowBtn .nextSlide");
const prevBtn = document.querySelector("#portfolio .arrowBtn .prevSlide");
const images = document.querySelectorAll("#portfolio .imageBox img");
let index = 0;


imageBoxes.forEach((imageBox, index) => {
  imageBox.addEventListener("click", () => {
    const imageBoxImage = imageBox.querySelector("img").src;
    const imageBoxP = imageBox.querySelector("p").textContent;

    displayImage.src = imageBoxImage;
    displayTitle.textContent = imageBoxP;

    // ? In Max-width 900px hide gallery and show Image ----------------------------
    if (window.innerWidth < 900) {
      (closeBtn, displayClass).style.display = "block";
      galleryClass.style.display = "none";
    }

    //? close Btn hide with click and show gallery ----------------------------------
    closeBtn.addEventListener("click", () => {
      galleryClass.style.display = "block";
      (closeBtn, displayClass).style.display = "none";
    })

    //? Arrow Btn show next and prev image with click -------------------------------

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


