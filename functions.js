const nav = document.querySelector("nav");
window.onscroll = function (e) {
  if (window.pageYOffset > 119) {
    nav.style.backgroundColor = "#363737";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};
