document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: ["Hello...", "My name is", "Khalid Alhajj"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: false,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
  };

  var typed = new Typed("#typed-name", options);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  AOS.init();

  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      const preloader = document.getElementById("preloader");
      preloader.style.opacity = 0;
      preloader.style.visibility = "hidden";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  };

  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

  backToTopButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(
    "[data-collapse-toggle='navbar-default']"
  );
  const navbar = document.getElementById("navbar-default");

  navbarToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("block");
  });

  document.addEventListener("click", function () {
    if (!navbar.classList.contains("hidden")) {
      navbar.classList.add("hidden");
      navbar.classList.remove("block");
    }
  });

  navbar.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
