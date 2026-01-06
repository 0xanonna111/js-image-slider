const images = [
  "https://picsum.photos/600/300?1",
  "https://picsum.photos/600/300?2",
  "https://picsum.photos/600/300?3",
  "https://picsum.photos/600/300?4"
];

let index = 0;
const slide = document.getElementById("slide");

function showImage() {
  slide.src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}
