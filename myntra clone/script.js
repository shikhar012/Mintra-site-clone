let currentSlide = 0;
const slideInterval = 3000; // Change the slide interval in milliseconds (e.g., 3000ms = 3 seconds)

function prevSlide() {
  currentSlide = (currentSlide - 1 + 5) % 5;
  updateSlidePosition();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 5;
  updateSlidePosition();
}

function updateSlidePosition() {
  const slide = document.querySelector('.carousel-slide');
  slide.style.transform = `translateX(-${currentSlide * 20}%)`;
}

function startCarousel() {
  setInterval(() => {
    nextSlide();
  }, slideInterval);
}

startCarousel();
