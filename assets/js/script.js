//* Navbar

// ========== Shrink Navbar ==========

const navbar = document.querySelector("nav");

window.onscroll = () => {
  if (window.pageYOffset > navbar.offsetTop * 9) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
};

// ========== Dropdown links on Shrink Navbar mode ==========

const titleLink = document.querySelectorAll("nav .titleLink");

for (let i = 0; i < titleLink.length; i++) {
  titleLink[i].addEventListener("click", function (e) {
    e.preventDefault();
    let isActive = this.classList.contains("active");
    titleLink[i].classList.remove("active");
    if (!isActive) {
      titleLink[i].classList.add("active");
    }
  });
}

// Show Services Lists
const lists = document.querySelectorAll(".services .list");
const servicesListUls = document.querySelectorAll(".services ul");

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let r = 0; r < servicesListUls.length; r++) {
      servicesListUls[r].classList.remove("active");
    }
    this.classList.toggle("active");
  });
}

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
