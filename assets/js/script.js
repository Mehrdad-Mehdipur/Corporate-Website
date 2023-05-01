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

// ========== Navbar Vertical mode , Showcase Image Box change mode  ==========

const showcase = document.querySelector("#showcase");
const arrow = document.querySelector("#showcase .arrow");
const showcaseImg = document.querySelector("#showcase .imgBox");
const nav = document.querySelector("nav");
const menuIcon = document.querySelector("nav .menuIcon");
const intro = document.querySelector("#showcase .intro");
const showcaseTitle = document.querySelector("#showcase .title");

window.onscroll = () => {
  showcaseTitle.classList.add("moveDown");
  if (window.scrollY > window.innerHeight / 50) {
    nav.classList.remove("navbar");
    nav.classList.add("verticalNav");
    showcaseImg.classList.add("hide");
    nav.classList.add("hide"); // Close verticalNav
    // Showcase Intro Change mode
    arrow.classList.add("hide");
    intro.classList.add("fullScreen");
  } else {
    if (window.innerWidth <= 900) {
      nav.classList.remove("navbar");
    } else {
      // Close Sidebar mode
      nav.classList.add("navbar");
      nav.classList.remove("verticalNav"); // Back to navbar mode
      nav.classList.add("hide"); // Close verticalNav
    }
    showcaseTitle.classList.remove("moveDown");
    arrow.classList.remove("hide"); // Hide flashing arrow
    intro.classList.remove("fullScreen"); // Showcase Intro Change to Initial mode
    intro.classList.add("closeFullScreen");
    showcaseImg.classList.remove("hide");
  }

  //  Intro Scroll Up
  if (window.scrollY > window.innerHeight / 4) {
    intro.classList.add("scrollUp");
    intro.style.top = window.innerHeight / 4 + "px";
  } else {
    intro.classList.remove("scrollUp");
    intro.style.top = "";
  }
};

// Open Navbar as a Sidebar
menuIcon.addEventListener("click", function () {
  nav.classList.toggle("hide");
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

function Responsive() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 900) {
    nav.classList.add("hide"); // Close verticalNav
    nav.classList.remove("navbar");
    nav.classList.add("verticalNav");
  } else {
    nav.classList.add("navbar");
    nav.classList.remove("verticalNav");
  }
}

window.addEventListener("resize", Responsive);
Responsive();

//* ========== Showcase ==========
