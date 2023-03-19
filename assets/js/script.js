//* Navbar

// ========== Show Search bar ==========
const showSearchBar = document.querySelector("#showSearchBar");
const searchBar = document.querySelector("#searchBar");

showSearchBar.onclick = () => {
  searchBar.classList.toggle("show");
};

// ========== Change Image By Hover On The Links of Project ==========

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

// ========== Showcase imgBox becomes full screen when scroll down  ==========

const showcaseImgBox = document.querySelector("#showcase .imgBox");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;

  if (scrollTop >= 50) {
    showcaseImgBox.classList.add("fullScreen");
  } else {
    showcaseImgBox.classList.remove("fullScreen");
  }
});
