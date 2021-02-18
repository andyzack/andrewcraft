const navToggle = document.querySelectorAll(".js-toggle-button");

if (navToggle && navToggle.length) {
  navToggle.forEach((e) => {
    e.addEventListener('click', (e) => {
      // prevent default link click and toggle class
      e.preventDefault();
      e.target.parentNode.classList.toggle("open");
    });
  });
}