//* Navbar

// ========== Show Search bar ==========
const showSearchBar = document.querySelector("#showSearchBar");
const searchBar = document.querySelector("#searchBar");

showSearchBar.onclick = () => {
  searchBar.classList.toggle("show");
};

// ========== Change Image By Hover On The Links ==========

const navProjectsLinks = document.querySelector("#navProjectsLinks").children;
const navProjectsImg = document.querySelector("#navProjectsImg").children;

for (let i = 0; i < navProjectsLinks.length; i++) {
  navProjectsLinks[i].addEventListener("mouseover", function () {
    const id = this.getAttribute("data-id");
    for (let r = 0; r < navProjectsImg.length; r++) {
      navProjectsImg[r].classList.remove("active");
    }
    navProjectsImg[id].classList.add("active");
  });
}

//* Showcase

const intro = document.querySelector("#showcase .intro");

// window.addEventListener("load", function () {
//   intro.classList.add("fadeOut");
// });
