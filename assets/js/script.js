//* Navbar

// ========== Navbar Shrink and Sidebar mode , Showcase Image Box change mode  ==========

const navbar = document.querySelector("nav");
const menuIcon = document.querySelector("nav .menuIcon");
const menuIconClass = document.querySelector("nav .menuIcon i");
const showcaseImgBox = document.querySelector("#showcase .imgBox");
const showcaseTitle = document.querySelector("#showcase .title");

window.onscroll = () => {
  showcaseTitle.classList.add("moveDown");

  if (window.scrollY > 20) {
    navbar.classList.add("shrink");

    // Open Navbar as a Sidebar
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("sidebar");
    });

    // Showcase ImgBox Change
    showcaseImgBox.classList.add("fullScreen");
  } else {
    // Close Sidebar mode
    navbar.classList.remove("shrink");
    navbar.classList.remove("sidebar");

    // Showcase ImgBox Change to Initial mode
    showcaseImgBox.classList.remove("fullScreen");
    showcaseTitle.classList.remove("moveDown");
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

// ========== Project Links Images Change By Mouse Hover  ==========

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
