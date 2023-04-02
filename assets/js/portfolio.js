const imageBoxes = document.querySelectorAll("#portfolio .imageBox");
const displayImage = document.querySelector("#portfolio .display img");
const displayTitle = document.querySelector("#portfolio .display p");

imageBoxes.forEach((imageBox) => {
  imageBox.addEventListener("click", () => {
    const ImageBoxImage = imageBox.querySelector("img").src;
    const ImageBoxP = imageBox.querySelector("p").textContent;

    displayImage.src = ImageBoxImage;
    displayTitle.textContent = ImageBoxP;
  });
});
