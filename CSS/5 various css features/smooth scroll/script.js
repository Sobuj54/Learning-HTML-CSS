const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("transparent", window.scrollY > 30);
});
