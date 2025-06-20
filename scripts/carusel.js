const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width + 20; // ширина + margin

let position = 0;

const prevButton = document.querySelector('.carousel-arrow--prev');
const nextButton = document.querySelector('.carousel-arrow--next');

prevButton.addEventListener('click', () => {
  position += slideWidth;
  if (position > 0) {
    position = -slideWidth * (slides.length / 2);
  }
  track.style.transform = `translateX(${position}px)`;
});

nextButton.addEventListener('click', () => {
  position -= slideWidth;
  if (position < -slideWidth * (slides.length / 2)) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
});