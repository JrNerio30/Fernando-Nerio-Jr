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
  const contentTitle = document.getElementById("photo__containerID");
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
  const contentTitle = document.getElementById("text__containerID");
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

// About Button Hover
const aboutButton = document.getElementById("about__button--ID");
const aboutButtonArrow = document.querySelector(".about__button--arrow");
aboutButton.addEventListener("mouseenter", function(){
  aboutButtonArrow.classList.add("active");
});
aboutButton.addEventListener("mouseleave", function(){
  aboutButtonArrow.classList.remove("active");
});

// Function to get current time in Calgary
function getCurrentTimeInCalgary() {
  // Create a new Date object
  const currentTime = new Date();
  
  // Set the time zone to Mountain Time (Calgary's time zone)
  const options = { timeZone: 'America/Edmonton' };
  
  // Format the date and time
  const formattedTime = currentTime.toLocaleString('en-US', options);
  
  return formattedTime;
}

// Function to update the time every second
function updateTime() {
  // Get the element where you want to display the time
  const timeElement = document.querySelector(".hero__time");
  
  // Update the time every second
  setInterval(function() {
    const calgaryTime = getCurrentTimeInCalgary();
    timeElement.textContent = calgaryTime;
  }, 1000);
}

// Call the updateTime function when the page loads
window.onload = updateTime;






