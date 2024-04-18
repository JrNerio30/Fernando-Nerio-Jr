// Cursor Trail: changes left and top value when the mouse is moving -->
const cursorRing = document.querySelector(".cursor__ring");
document.addEventListener("mousemove", function (e) {
  requestAnimationFrame(() => {
    cursorRing.style.left = `${e.clientX}px`;
    cursorRing.style.top = `${e.clientY}px`;
  });
});

// Preloader Overlay Childer(Bars)
const preloaderOverlay = document.querySelector(".about__preloader__overlay");

for(i = 0; i <= 7; i++){
  const preloaderBars = document.createElement("li");

  preloaderOverlay.appendChild(preloaderBars);

  preloaderBars.classList.add("about__preloader__bars")
}

// Toggle "active" class name when -->
const toggleCursor = function () {
  cursorRing.classList.toggle("active");
  document.addEventListener("mousedown", toggleCursor);
  document.addEventListener("mouseup", toggleCursor);
};

// GSAP
gsap.to(".about__preloader__bars", 0.5, {
  height: 0,
  stagger: {
    amount: 0.4
  },
  ease: "power4.inOut",
});

gsap.to(".about__preloader__overlay", {
  y: -2000,
  delay: 0.6,
});