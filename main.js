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
  
    const themeToggler = document.getElementById("theme-toggler");
  
    themeToggler.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
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
  
    const backToTopButton = document.getElementById('backToTop');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    });
  
    backToTopButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
  