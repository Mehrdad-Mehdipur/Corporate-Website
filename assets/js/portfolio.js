// //* Portfolio

const images = document.querySelectorAll(".slide img");
let display = document.querySelector(".mainPic");

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

