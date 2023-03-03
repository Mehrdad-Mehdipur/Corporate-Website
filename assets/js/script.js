// ===== Show Search bar =====
const showSearchBar = document.querySelector("#showSearchBar");
const searchBar = document.querySelector("#searchBar");

showSearchBar.onclick = () => {
  searchBar.classList.toggle("show");
};
