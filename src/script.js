// About Section Scroll Fade-In Event
window.addEventListener("scroll", function () {
  const contentTitle = document.querySelector(".about");
  const position = contentTitle.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    contentTitle.classList.add("visible");
  } else {
    contentTitle.classList.remove("visible");
  }
});

// About Photo Scroll Fade-In Event
window.addEventListener("scroll", function () {
  const contentTitle = document.querySelector(".about__photo__container");
  const position = contentTitle.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    contentTitle.classList.add("visible");
  } else {
    contentTitle.classList.remove("visible");
  }
});

// About Text Container
// About Photo Scroll Fade-In Event
window.addEventListener("scroll", function () {
  const contentTitle = document.querySelector(".about__text__container");
  const position = contentTitle.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    contentTitle.classList.add("visible");
  } else {
    contentTitle.classList.remove("visible");
  }
});

// Scrolls Up when window is loaded
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

// Cursor Trail: changes left and top value when the mouse is moving -->
const cursorRing = document.querySelector(".cursor__ring");
document.addEventListener("mousemove", function (e) {
  requestAnimationFrame(() => {
    cursorRing.style.left = `${e.clientX}px`;
    cursorRing.style.top = `${e.clientY}px`;
  });
});

// Toggle "active" class name when -->
const toggleCursor = function () {
  cursorRing.classList.toggle("active");
  document.addEventListener("mousedown", toggleCursor);
  document.addEventListener("mouseup", toggleCursor);
};

// Hero Box Container Children (7 li)
const heroBoxContainer = document.querySelector(".hero__box__container");
for (i = 1; i <= 7; i++) {
  const heroBoxItems = document.createElement("li");
  heroBoxContainer.appendChild(heroBoxItems);
  heroBoxItems.classList.add("hero__box--vector");
}

// Each Hero Box Container's children has different animation delay -->
const heroBoxVectors = document.querySelectorAll(".hero__box__container > .hero__box--vector");

heroBoxVectors.forEach((box, index) =>{
  box.style.animationDelay = `${0.2 + index * 0.1}s`;
});


