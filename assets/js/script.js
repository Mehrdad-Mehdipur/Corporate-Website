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

const navLinks = document.querySelectorAll("nav .link");

for (let navLink of navLinks) {
  navLink.addEventListener("mouseover", function () {
    nav.classList.add("fullShadow");
    let screenWidth = window.innerWidth;
    if (nav.classList.contains("verticalNav") && screenWidth >= 900) {
      nav.classList.remove("fullShadow"); // link hover shadow Off on vertical mode
    }
  });

  navLink.addEventListener("mouseout", function () {
    nav.classList.remove("fullShadow");
  });
}

// ========== Show Search bar ==========

const showSearchBar = document.querySelector("#showSearchBar");
const searchBar = document.querySelector("#searchBar");

showSearchBar.onclick = () => {
  searchBar.classList.toggle("show");
};

// ========== Navbar Vertical mode , Showcase Image Box change mode  ==========

const showcase = document.querySelector("#showcase");
const arrow = document.querySelector("#showcase .arrow");
const showcaseImg = document.querySelector("#showcase .imgBox");
const nav = document.querySelector("nav");
const menuIcon = document.querySelector("nav .menuIcon");
const intro = document.querySelector("#showcase .intro");
const showcaseTitle = document.querySelector("#showcase .title");

function horizontalNav() {
  nav.classList.add("navbar");
  nav.classList.remove("verticalNav"); // Back to navbar mode
}

function verticalNav() {
  nav.style.display = "flex";
  nav.classList.remove("navbar");
  nav.classList.add("verticalNav");
  nav.classList.add("hideScrollBar");
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

window.addEventListener("load", scrollingDown);
window.addEventListener("scroll", scrollingDown);

//* Vertical Navbar

// Open and Close VerticalNav
menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close the verticalNav when clicking outside
window.addEventListener("click", function (event) {
  if (!nav.contains(event.target)) {
    nav.classList.remove("active");
  }
});

// ========== VerticalNav links Click mode ==========
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

const videoBtn = document.querySelector("#showcase .videoBtn");
const introVideo = document.querySelector("#showcase .introVideo");
const closeVideo = document.querySelector("#showcase .introVideo i");
const videoDemo = document.querySelector("video");
const brandName = document.querySelector(".brandName");

// Open Video
videoBtn.addEventListener("click", () => {
  introVideo.style.display = "flex";
  videoDemo.play();
  hideNav();
  brandName.style.zIndex = -2;
});

// Close Video
closeVideo.addEventListener("click", () => {
  introVideo.style.display = "none";
  verticalNav();
  brandName.style.zIndex = 1;
  if (window.innerWidth < 900) {
    brandName.style.zIndex = 0;
  }
});
