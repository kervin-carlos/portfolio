


// BootStrap Tooltip ver. 5.3
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  });

document.addEventListener("DOMContentLoaded", function () {
const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})});


// Burger Button
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle"); //button of the burger
    const nav = document.querySelector("nav");

    if (menuToggle) {
      menuToggle.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent immediate navigation
        const href = this.getAttribute("href");
  
        document.body.classList.add("fade-out"); // Start fade effect

        const nav = document.querySelector("nav");
        nav.style.transition = "none";  // Prevent transition on the nav
  
        setTimeout(() => {
          window.location.href = href; // Navigate after fade effect
        }, 500);
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const icon = document.getElementById("toggle-icon");

    // Check if dark mode was enabled before
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        icon.classList.replace("fa-sun", "fa-moon"); // Show moon in dark mode
        icon.classList.add("glow"); // Add glow effect to moon
    } else {
        icon.classList.replace("fa-moon", "fa-sun"); // Show sun in light mode
        icon.classList.remove("glow"); // Remove glow
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            icon.classList.replace("fa-sun", "fa-moon"); // Show moon
            icon.classList.add("glow"); // Glow effect for moon
        } else {
            localStorage.setItem("darkMode", "disabled");
            icon.classList.replace("fa-moon", "fa-sun"); // Show sun
            icon.classList.remove("glow"); // Remove glow
        }
    });
});
