const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

const prevButton = document.querySelector('.carousel-arrow--prev');
const nextButton = document.querySelector('.carousel-arrow--next');

let position = 0;

function getSlideWidth() {
  const slide = slides[0];
  const style = window.getComputedStyle(slide);
  const marginRight = parseFloat(style.marginRight);
  return slide.getBoundingClientRect().width + marginRight;
}

function updatePosition() {
  track.style.transform = `translateX(${position}px)`;
}

prevButton.addEventListener('click', () => {
  const slideWidth = getSlideWidth();
  position += slideWidth;
  if (position > 0) {
    position = -slideWidth * (slides.length - 1);
  }
  updatePosition();
});

nextButton.addEventListener('click', () => {
  const slideWidth = getSlideWidth();
  position -= slideWidth;
  if (position < -slideWidth * (slides.length - 1)) {
    position = 0;
  }
  updatePosition();
});

// Обновляем позицию при ресайзе окна
window.addEventListener('resize', () => {
  position = 0;
  updatePosition();
});