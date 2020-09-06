const nav = document.querySelector("nav");
window.onscroll = function (e) {
  if (window.pageYOffset > 119) {
    nav.style.backgroundColor = "#363737";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

const galleryMenu = document.querySelectorAll(".gallery-menu-list");
galleryMenu.forEach((list) => {
  list.onclick = (e) => {
    galleryMenu.forEach((node) => {
      node.classList.remove("active");
    });
    list.classList.add("active");
  };
});
