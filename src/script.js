// Content Title Scroll Fade-In Event
window.addEventListener('scroll', function() {
  const contentTitle = document.querySelector('.content__container');
  const position = contentTitle.getBoundingClientRect();
  
  if(position.top < window.innerHeight && position.bottom >= 0){
    contentTitle.classList.add('visible');
  }else{
    contentTitle.classList.remove('visible');
  }
});

// Scrolls Up when window is loaded
window.addEventListener('load', function() {
  window.scrollTo(0,0);
});

// Cursor Trail
const cursorRing = document.getElementById("cursor__ringID");
    document.addEventListener("mousemove", (e) =>{
        requestAnimationFrame(() =>{
            cursorRing.style.left = `${e.clientX}px`;
            cursorRing.style.top = `${e.clientY}px`;
        });
    });

const toggleCursor = () => {
    cursorRing.classList.toggle("active");
    document.addEventListener("mousedown", toggleCursor);
    document.addEventListener("mouseup", toggleCursor);
}



