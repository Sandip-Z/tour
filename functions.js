const nav = document.querySelector("nav");
const timeline = document.getElementById("timeline");
const motivation = document.getElementById("motivation");
const galleryMenu = document.querySelectorAll(".gallery-menu-list");
const galleryImages = document.querySelectorAll(".gallery-img");
window.onscroll = function (e) {
  if (window.pageYOffset > 119) {
    nav.style.backgroundColor = "#363737";
    nav.classList.add("shadow");
  } else {
    nav.style.backgroundColor = "transparent";
    nav.classList.remove("shadow");
  }
  if (pageYOffset > motivation.offsetTop - 400) {
    galleryImages.forEach((image) => {
      image.classList.add("slidein");
    });
  }
};

galleryMenu.forEach((list) => {
  list.onclick = (e) => {
    reflectOnGallery(e.target.id);
    galleryMenu.forEach((node) => {
      node.classList.remove("active");
    });
    list.classList.add("active");
  };
});

function reflectOnGallery(id) {
  galleryImages.forEach((image) => {
    const newSrc = image.src.replace(image.src.split("-")[2], `${id}.jpg`);
    image.setAttribute("src", newSrc);
  });
}
