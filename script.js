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
