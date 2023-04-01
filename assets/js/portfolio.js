
const images = document.querySelectorAll(".imageBox img");
let display = document.querySelector(".display");

images.forEach(image => {
  image.addEventListener("click", () => {
    const id = image.getAttribute("data-id");
    console.log(id);
    const newImage = document.createElement("img");
    newImage.src = `./assets/images/pic${id}.jpg`;
    display.innerHTML = "";
    display.appendChild(newImage);
  })
})
