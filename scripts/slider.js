const gallerySection = document.querySelector("#sectionGaleria");
const galleryItems = gallerySection.querySelectorAll(".gallery-item");
const arrowsItems = document.querySelector(".arrows");

if (!gallerySection.hasChildNodes()) {
  const div = document.createElement("div");
  div.textContent = "No Images...";
  //   return null;
} // checking do we have any images

galleryItems.forEach((el, index) => {
  el.setAttribute("id", index);
});
// adding for each image id

const sliderInit = (event) => {
  if (
    event.target.classList.contains("gallery-item") || // if clicked on div with image
    event.target.classList.contains("gallery-item__image") || // or clicked on image
    event.target.classList.contains("active__item") // if clicked on active div with image
  ) {
    const parentDiv = event.target.closest("div");
    const id = Number(parentDiv.getAttribute("id"));
    showImage(id);
    showArrows();
  }
};

const showArrows = () => {
  arrowsItems.classList.toggle("showArrows");
};

const showImage = (id) => {
  const imageContainer = galleryItems[id];

  try {
    imageContainer.classList.toggle("active__item");
    imageContainer.classList.toggle("gallery-item");
  } catch (e) {
    console.warn("Ehh that's okay");
  }
};

const changeImg = (event) => {
  const button = event.target;
  if (!button.classList.contains("sliderArrow")) {
    return null;
  }

  const activeItem = document.querySelector(".active__item");
  const activeItemId = Number(activeItem.getAttribute("id"));

  if (button.classList.contains("arrowLeft")) {
    activeItem.classList.toggle("active__item");
    activeItem.classList.toggle("gallery-item");
    if (activeItemId - 1 < 0) {
      showImage(galleryItems.length - 1);
    }
    showImage(activeItemId - 1);
  } else {
    activeItem.classList.toggle("active__item");
    activeItem.classList.toggle("gallery-item");
    if (activeItemId + 1 > galleryItems.length - 1) {
      showImage(0);
    }
    showImage(activeItemId + 1);
  }
};

gallerySection.addEventListener("click", sliderInit);

arrowsItems.addEventListener("click", changeImg);
