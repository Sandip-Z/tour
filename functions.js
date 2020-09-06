const nav = document.querySelector("nav");
window.onscroll = function (e) {
  if (window.pageYOffset > 119) {
    nav.style.backgroundColor = "#2c3e50";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};
