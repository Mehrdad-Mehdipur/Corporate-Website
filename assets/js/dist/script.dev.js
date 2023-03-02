"use strict";

//* Show Info and Show Javascript Code
var infos = document.querySelectorAll(".info");
var showJsBTNs = document.querySelectorAll(".btnShowJs");
var codeWindows = document.querySelectorAll(".codeWindow");
var btnCloses = document.querySelectorAll(".btnClose");

var _loop = function _loop(i) {
  var info = infos[i];
  var card = document.querySelectorAll(".card")[i];
  card.addEventListener("mouseover", function () {
    info.classList.add("active");
    card.classList.add("show");
  });
  card.addEventListener("mouseout", function () {
    info.classList.remove("active");
    card.classList.remove("show");
  });
};

for (var i = 0; i < infos.length; i++) {
  _loop(i);
} //* To Top Button


window.addEventListener("scroll", function () {
  var toTop = document.querySelector(".to-top");

  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
}); //* Fade Transition When Start

window.onpageshow = function () {
  document.querySelector("#onPageShow").style.opacity = 0;
  setTimeout(function () {
    document.querySelector("#onPageShow").style.display = "none";
  }, 1000);
}; // * Show Javascript Code
//? متن رو بخون حتما
// تگ های آ در ایندکس باید بیاد بالای اینفو
// میخوایم روی اینفو کلیک بشه و کد جی اس نمایش داده بشه
// ! این کد قبلی است و باید عوض بشه
// for (let i = 0; i < showJsBTNs.length; i++) {
//   const showBTN = showJsBTNs[i];
//   showBTN.addEventListener("click", () => {
//     codeWindows.forEach((e) => {
//       e.classList.add("active");
//     });
//   });
// }
// for (let i = 0; i < btnCloses.length; i++) {
//   const btnClose = btnCloses[i];
//   btnClose.addEventListener("click", () => {
//     codeWindows.forEach((e) => {
//       e.classList.remove("active");
//     });
//   });
// }