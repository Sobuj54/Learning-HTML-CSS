document.addEventListener("DOMContentLoaded", () => {
  // mobile menu control
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const crossMark = document.querySelector(".navbar__cross");
  const hamburger = document.querySelector(".navbar__hamburger");

  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    crossMark.classList.toggle("show");
    hamburger.classList.toggle("hide");
  });

  // modal
  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const close = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  videoButton.addEventListener("click", () => {
    modal.style.display = "block";

    videoPlayer.src = "https://www.youtube.com/embed/GwJrZBe8JX4";

    // close the modal on x click
    close.addEventListener("click", () => {
      modal.style.display = "none";
      videoPlayer.src = "";
    });

    //  close modal on outside click
    modal.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
        videoPlayer.src = "";
      }
    });
  });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-scroll", window.scrollY > 0);
});
