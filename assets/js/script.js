//* Navbar

// ========== Sticky Navbar ==========

const navbar = document.querySelector("nav");

window.onscroll = () => {
  if (window.pageYOffset > navbar.offsetTop * 4) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

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
<<<<<<< HEAD
}
=======
}

//* Showcase

// ========== Showcase imgBox becomes full screen when scroll down  ==========

const showcaseImgBox = document.querySelector("#showcase .imgBox");
const showcaseTitle = document.querySelector("#showcase .title");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop >= 20) {
    showcaseImgBox.classList.add("fullScreen");
    showcaseTitle.classList.add("moveDown");
  } else {
    showcaseImgBox.classList.remove("fullScreen");
    showcaseTitle.classList.remove("moveDown");
  }
});
>>>>>>> 53c024a861f243a8c922afb4f9da18d5df84df5f
