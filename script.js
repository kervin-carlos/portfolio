document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle) {
      menuToggle.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); // Select all nav links
    
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent immediate navigation
        const href = this.getAttribute("href");
  
        document.body.classList.add("fade-out"); // Start fade effect
  
        setTimeout(() => {
          window.location.href = href; // Navigate after fade effect
        }, 500); // Match transition time (0.5s)
      });
    });
  });