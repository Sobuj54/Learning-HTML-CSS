document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");

  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-scroll", window.scrollY > 0);
});
