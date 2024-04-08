// Preloader Screen 
gsap.to(".preloader", {
  x: -5000,
  duration: 2,
  delay: 7
});

// Hero Section
gsap.to(".hero", {
  y: -5000,
  duration: 2,
  delay: 12,
});

// Hero Title
gsap.fromTo(".hero__title", { opacity: 0}, { opacity: 1, duration: 1, delay: 7.5});

// Content Title
gsap.fromTo(".content__title", { opacity: 0}, { opacity: 1, duration: 1, delay: 12.5});

