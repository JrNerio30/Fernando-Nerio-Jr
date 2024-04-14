// Preloader Screen
gsap.to(".preloader", {
  x: -5000,
  duration: 2,
  delay: 2.6,
});

// Navigation
gsap.fromTo(
  ".navigation",
  {
    y: -200,
  },
  {
    y: 0,
    duration: 1.5,
    delay: 2.8,
  }
);

// Hero Title
gsap.fromTo(
  ".hero__title__container",
  {
    opacity: 0,
  },
  { opacity: 1,
    duration: 1,
    delay: 2.8
  }
);

// Hero Arrow Button
gsap.fromTo(
  ".hero__button",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
    delay: 3.5
  }
);

// Hero Box
gsap.fromTo(
  ".hero__box",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
    delay: 2.8,
  }
);
