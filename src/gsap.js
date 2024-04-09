// Preloader Screen 
gsap.to(".preloader", {
  x: -5000,
  duration: 2,
  delay: 5.7
});

// Hero Title
gsap.fromTo(".hero__title__container", { opacity: 0}, { opacity: 1, duration: 1, delay: 6});

// Hero Button 
gsap.fromTo(".hero__button", { opacity: 0}, { opacity: 1, duration: 1, delay: 6.9});




