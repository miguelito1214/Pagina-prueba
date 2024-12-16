// Carrusel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let index = 0;

nextBtn.addEventListener('click', () => {
  index = (index + 1) % 3;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + 3) % 3;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// GSAP Animaciones
gsap.registerPlugin(ScrollTrigger);

// Header animaciones
gsap.from('.header-content h1', {
  opacity: 0,
  y: -50,
  duration: 1,
});

gsap.from('.header-content p', {
  opacity: 0,
  y: 30,
  delay: 0.3,
  duration: 1,
});

gsap.from('.btn', {
  opacity: 0,
  scale: 0.8,
  delay: 0.6,
  duration: 1,
});

// Animaciones de secciones
gsap.utils.toArray('.section-title').forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

// Botón de redes sociales
gsap.from('.social-icons a', {
  scrollTrigger: '.floating-social',
  opacity: 0,
  x: 30,
  stagger: 0.2,
  duration: 0.5,
});
