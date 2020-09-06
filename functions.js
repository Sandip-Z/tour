const nav = document.querySelector("nav");
window.onscroll = function (e) {
  if (window.pageYOffset > 119) {
    nav.style.backgroundColor = "#363737";
    nav.classList.add("shadow");
  } else {
    nav.style.backgroundColor = "transparent";
    nav.classList.remove("shadow");
  }
  //   if (window.pageYOffset >= document.getElementById("timeline").offsetTop) {
  //     document.getElementById("timeline").style.position = "absolute";
  //   } else {
  //     document.getElementById("timeline").style.position = "relative";
  //   }
};

const galleryMenu = document.querySelectorAll(".gallery-menu-list");
const galleryImages = document.querySelectorAll(".gallery-img");
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
