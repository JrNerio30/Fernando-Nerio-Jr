// About Text Scroll Fade-In Event
window.addEventListener("scroll", function () {
  const contentText = document.querySelector(".about__text__container");
  const contentTextPosition = contentText.getBoundingClientRect();

  if (
    contentTextPosition.top < window.innerHeight &&
    contentTextPosition.bottom >= 0
  ) {
    contentText.classList.add("visible");
  }
});

// About Photo Scroll Fade-In Event
window.addEventListener("scroll", function () {
  const contentPhoto = document.querySelector(".about__photo__container");
  const contentPhotoPosition = contentPhoto.getBoundingClientRect();

  if (
    contentPhotoPosition.top < window.innerHeight &&
    contentPhotoPosition.bottom >= 0
  ) {
    contentPhoto.classList.add("visible");
  }
});

// Skills Items flixY when visible
window.addEventListener("scroll", function () {
  const skillsItemsList = document.querySelectorAll(".skills__items");
  skillsItemsList.forEach(function (skillsItems) {
    const skillsItemsPosition = skillsItems.getBoundingClientRect();

    if (
      skillsItemsPosition.top < window.innerHeight &&
      skillsItemsPosition.bottom >= 0
    ) {
      skillsItems.classList.add("visible");
    }
  });
});

// Projects Title Container
window.addEventListener("scroll", function () {
  const projectstitle = document.querySelector(".projects__header__container");
  const projectstitlePosition = projectstitle.getBoundingClientRect();

  if (
    projectstitlePosition.top < window.innerHeight &&
    projectstitlePosition.bottom >= 0
  ) {
    projectstitle.classList.add("visible");
  }
});

// Projects Items
window.addEventListener("scroll", function () {
  const projectItemsList = document.querySelectorAll(".projects__items");
  projectItemsList.forEach(function (projectItems) {
    const projectItemsPosition = projectItems.getBoundingClientRect();

    if (
      projectItemsPosition.top < window.innerHeight &&
      projectItemsPosition.bottom >= 0
    ) {
      projectItems.classList.add("visible");
    }
  });
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
const heroBoxVectors = document.querySelectorAll(
  ".hero__box__container > .hero__box--vector"
);

heroBoxVectors.forEach((box, index) => {
  box.style.animationDelay = `${0.2 + index * 0.1}s`;
});

// About Button Hover
const aboutButton = document.getElementById("about__button--ID");
const aboutButtonArrow = document.querySelector(".about__button--arrow");
aboutButton.addEventListener("mouseenter", function () {
  aboutButtonArrow.classList.add("active");
});
aboutButton.addEventListener("mouseleave", function () {
  aboutButtonArrow.classList.remove("active");
});

// Accordion Drop Down Menu
const navigation = document.querySelector(".navigation");
const navigationContainer = document.querySelector(".navigation__container");
const navigationLinks = document.querySelectorAll(".navigation__links");
const navigationLogo = document.querySelector(".navigation__logo__link");
const hamburgerMenu = document.querySelector(".hamburger__container");
const hamburgerLines = document.querySelectorAll(".hamburger__lines");

  hamburgerMenu.addEventListener("click", function() {
    navigation.classList.toggle("dropdown");
    navigationContainer.classList.toggle("dropdown");
  });

  hamburgerMenu.addEventListener("click", function() {
    hamburgerLines.forEach(function(exit) {
      exit.classList.toggle("exit");
    });
  });

  navigationLinks.forEach(function(remove) {
    remove.addEventListener("click", function() {
      hamburgerLines.forEach(function(noX) {
        noX.classList.remove("exit")
      });
    });
  })

  navigationLinks.forEach(function(removeDropdown) {
    removeDropdown.addEventListener("click", function() {
      navigation.classList.remove("dropdown");
      navigationContainer.classList.remove("dropdown");
    });
  });

  navigationLogo.addEventListener("click", function() {
    navigation.classList.remove("dropdown");
    navigationContainer.classList.remove("dropdown");
  });

// Function to get current time in Calgary
function getCurrentTimeInCalgary() {
  // Create a new Date object
  const currentTime = new Date();

  // Set the time zone to Mountain Time (Calgary's time zone)
  const options = { timeZone: "America/Edmonton" };

  // Format the date and time
  const formattedTime = currentTime.toLocaleString("en-US", options);

  return formattedTime;
}

// Function to update the time every second
function updateTime() {
  // Get the element where you want to display the time
  const timeElement = document.querySelector(".hero__time");

  // Update the time every second
  setInterval(function () {
    const calgaryTime = `${"Based in Calgary, AB:"} ${getCurrentTimeInCalgary()}`;
    timeElement.textContent = calgaryTime;
  }, 1000);
}

// Call the updateTime function when the page loads
window.onload = updateTime;

// Copy Right Year
const year = new Date().getFullYear();
const copyright =  `${year} ${"Fernando Nerio Jr"}`;

document.getElementById("copyRightYear").outerHTML = copyright;
