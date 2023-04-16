//* Navbar

// ========== Navbar Shrink and Sidebar mode , Showcase Image Box change mode  ==========

const showcase = document.querySelector("#showcase");
const arrow = document.querySelector("#showcase .arrow");
const showcaseImg = document.querySelector("#showcase .imgBox");
const navbar = document.querySelector("nav");
const menuIcon = document.querySelector("nav .menuIcon");
const menuIconClass = document.querySelector("nav .menuIcon i");
const intro = document.querySelector("#showcase .intro");
const showcaseTitle = document.querySelector("#showcase .title");

window.onscroll = () => {
  showcaseTitle.classList.add("moveDown");
  if (window.scrollY > innerHeight / 50) {
    navbar.classList.add("verticalNav");
    navbar.classList.remove("navbar");
    // Open Navbar as a Sidebar
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("hide");
    });
    // Showcase Intro Change mode
    arrow.classList.add("hide");
    intro.classList.add("fullScreen");
    showcaseImg.classList.add("hide");
  } else {
    // Close Sidebar mode
    navbar.classList.add("navbar");
    showcaseTitle.classList.remove("moveDown");
    navbar.classList.remove("verticalNav"); // Back to navbar mode
    navbar.classList.add("hide"); // Close verticalNav
    arrow.classList.remove("hide"); // Hide flashing arrow
    intro.classList.remove("fullScreen"); // Showcase Intro Change to Initial mode
    showcaseImg.classList.remove("hide"); // Show image box
  }

  //  Intro Scroll Up
  if (window.scrollY > window.innerHeight / 4) {
    intro.classList.add("scrollUp");
    intro.style.top = window.innerHeight / 4 + "px";
  } else {
    intro.classList.remove("scrollUp");
    intro.style.top = "";
  }

  //TODO - When scrolling, the Items move up animatedly
  if (window.scrollY > intro.pageOffsetHeight) {
  }
};

// ========== Navbar Shadow ==========
const links = document.querySelectorAll("nav .link");

for (let link of links) {
  link.addEventListener("mouseover", function () {
    navbar.classList.add("fullShadow");
    if (navbar.classList.contains("verticalNav")) {
      navbar.classList.remove("fullShadow"); // link hover shadow id Off
    }
  });

  link.addEventListener("mouseout", function () {
    navbar.classList.remove("fullShadow");
  });
}

//TODO Show Services Lists
const lists = document.querySelectorAll(".services .list");
const servicesListUls = document.querySelectorAll(".services ul");

for (const list of lists) {
  list.addEventListener("click", function (e) {
    e.preventDefault();
    servicesListUls.forEach((servicesListUl) => {
      servicesListUl.classList.remove("active");
    });
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

// ========== Navbar Responsive  ==========

function Responsive() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 900) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
}

window.addEventListener("resize", Responsive);

// * Vertical Navbar

// ========== Vertical Navbar links Click mode ==========

// ========== Vertical Navbar links Click mode ==========

const verticalLinks = document.querySelectorAll("nav .link");

for (let verticalLink of verticalLinks) {
  verticalLink.addEventListener("click", function () {
    if (verticalLink.classList.contains("active")) {
      verticalLink.classList.remove("active");
    } else {
      verticalLinks.forEach((verticalLink) => {
        verticalLink.classList.remove("active");
      });
      verticalLink.classList.add("active");
    }
  });
}
