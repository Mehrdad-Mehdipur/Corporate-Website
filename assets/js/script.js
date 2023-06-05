//* ========== Navbar ==========

// ========== Project Links Images Change By Mouse Hover  ==========

const navProjectsLinks = document.querySelector("#navProjectsLinks").children;
const navProjectsImgs = document.querySelector("#navProjectsImg").children;

for (let navProjectsLink of navProjectsLinks) {
  navProjectsLink.addEventListener("mouseover", function () {
    const id = this.getAttribute("data-id");
    for (const navProjectsImg of navProjectsImgs) {
      navProjectsImg.classList.remove("active");
    }
    navProjectsImgs[id].classList.add("active");
  });
}

// ========== Navbar Link Hover Shadow ==========

const links = document.querySelectorAll("nav .link");

for (let link of links) {
  link.addEventListener("mouseover", function () {
    nav.classList.add("fullShadow");
    let screenWidth = window.innerWidth;
    if (nav.classList.contains("verticalNav") && screenWidth >= 900) {
      nav.classList.remove("fullShadow"); // link hover shadow Off on vertical mode
    }
  });

  link.addEventListener("mouseout", function () {
    nav.classList.remove("fullShadow");
  });
}

// ========== Show Search bar ==========

const showSearchBar = document.querySelector("#showSearchBar");
const searchBar = document.querySelector("#searchBar");

showSearchBar.onclick = () => {
  searchBar.classList.toggle("show");
};

// ========== Navbar Vertical mode | Showcase Image Box change mode  ==========

const showcase = document.querySelector("#showcase");
const arrow = document.querySelector("#showcase .arrow");
const showcaseImg = document.querySelector("#showcase .imgBox");
const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menuIcon");
const intro = document.querySelector("#showcase .intro");
const showcaseTitle = document.querySelector("#showcase .title");

function horizontalNav() {
  nav.classList.add("navbar");
  nav.classList.remove("verticalNav"); // Back to navbar mode
  menuIcon.style.display = "none";
  nav.style.transition = "none";
}

function verticalNav() {
  nav.style.display = "flex";
  nav.classList.remove("navbar");
  nav.classList.add("verticalNav");
  menuIcon.style.display = "flex";
}

function hideNav() {
  nav.style.display = "none";
}

function scrollingDown() {
  if (window.scrollY > 50) {
    verticalNav();
    showcaseTitle.classList.add("moveDown");
    showcaseImg.classList.add("hide");
    intro.classList.add("fullScreen"); // Showcase Intro Change mode
    intro.classList.remove("closeFullScreen"); // Disable Rivers animation when closing intro
  } else {
    if (window.innerWidth > 900) {
      horizontalNav();
    }
    showcaseTitle.classList.remove("moveDown");
    arrow.classList.remove("hide"); // Hide flashing arrow
    intro.classList.remove("fullScreen"); // Showcase Intro Change to Initial mode
    intro.classList.add("closeFullScreen"); // Rivers animation when closing intro
    showcaseImg.classList.remove("hide");
  }

  // Showcase goes up when scrolling the page
  if (window.scrollY > window.innerHeight / 4) {
    arrow.classList.add("hide");
    intro.classList.add("scrollUp"); // Intro position change to absolute
    intro.style.top = window.innerHeight / 4 + "px";
  } else {
    intro.classList.remove("scrollUp");
    intro.style.top = "";
  }
}

window.addEventListener("scroll", scrollingDown);

// Toggle VerticalNav
menuIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
  const verticalNav = document.querySelector(".verticalNav");
  verticalNav.style.transition = "all 0.4s ease";
});

//* Vertical Navbar

// ========== Vertical Navbar links Click mode ==========
const navTitleLinks = document.querySelectorAll("nav .titleLink");

for (let navTitleLink of navTitleLinks) {
  navTitleLink.addEventListener("click", function () {
    if (navTitleLink.classList.contains("active")) {
      navTitleLink.classList.remove("active");
    } else {
      navTitleLinks.forEach((navTitleLink) => {
        navTitleLink.classList.remove("active");
      });
      navTitleLink.classList.add("active");
    }
  });
}

// ========== Vertical Navbar Services inner lists open ==========
const navServicesH3s = document.querySelectorAll("nav .services .list h3");

for (const h3 of navServicesH3s) {
  h3.addEventListener("click", () => {
    if (h3.classList.contains("active")) {
      h3.classList.remove("active");
    } else {
      navServicesH3s.forEach((h3) => {
        h3.classList.remove("active");
      });
      h3.classList.add("active");
    }
  });
}

//* ========== Navbar Responsive ==========

function navResponsive() {
  if (window.innerWidth < 900) {
    verticalNav();
  } else {
    if (window.scrollY < 50) {
      horizontalNav();
    } else {
      verticalNav();
    }
  }
}

window.addEventListener("load", navResponsive);
window.addEventListener("resize", navResponsive);

//* ========== Showcase ==========

// Show Intro Video

const introVideo = document.querySelector("#showcase .introVideo");
const videoBtn = document.querySelector("#showcase .videoBtn");
const closeVideo = document.querySelector("#showcase .videoBox i");
const videoBox = document.querySelector("#showcase .videoBox");
const videoDemo = document.querySelector(
  "#showcase .introVideo .videoBox video"
);
const brandName = document.querySelector(".brandName");

// Open Video
videoBtn.addEventListener("click", () => {
  videoBox.style.display = "flex";
  videoDemo.play();
  hideNav();
  brandName.style.opacity = 0;
});

// Close Video
closeVideo.addEventListener("click", () => {
  videoBox.style.display = "none";
  verticalNav();
  videoDemo.pause();
  brandName.style.opacity = 1;
});
