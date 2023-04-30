const previewBtn = document.getElementById("preview-btn");
const configBtn = document.getElementById("config-btn");
const addTagBtn = document.getElementById("add-tag-btn");
const tagList = document.getElementById("tag-list");
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const images = carousel.querySelectorAll("img");
let currentImageIndex = 0;

function previewButtonClicked() {
  previewBtn.classList.add("selected");
  configBtn.classList.remove("selected");
}

function configButtonClicked() {
  configBtn.classList.add("selected");
  previewBtn.classList.remove("selected");
}

function prevImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  images[currentImageIndex].classList.add("active");
}

function nextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  images[currentImageIndex].classList.add("active");
}

function addNewTag() {
  const tag = document.createElement("p");
  tag.textContent = "NewTag";
  tagList.appendChild(tag);
}

function deleteTag(e) {
  const tag = e.target;
  tagList.removeChild(tag);
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
configBtn.addEventListener("click", configButtonClicked);
previewBtn.addEventListener("click", previewButtonClicked);
addTagBtn.addEventListener("click", addNewTag);
tagList.addEventListener("click", (e) => deleteTag(e));
