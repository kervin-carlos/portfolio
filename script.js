
// BootStrap Tooltip ver. 5.3
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  });


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


  let vantaEffect; // Store VANTA instance
//Vanta bg darkmode
function initVanta(isDarkMode) {
  if (vantaEffect) vantaEffect.destroy(); // Destroy old VANTA effect first

  vantaEffect = VANTA.BIRDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: isDarkMode ? 0x1a1a1a : 0xe3e3c4, // Dark or Light background
    color1: isDarkMode ? 0xffffff : 0x000000,          // Bird color1
    color2: isDarkMode ? 0xff9900 : 0x5c7979,           // Bird color2
    birdSize: 1.10,
    wingSpan: 18.00,
    speedLimit: 4.00,
    separation: 37.00,
    alignment: 16.00,
    cohesion: 22.00,
    quantity: 3.00,
    backgroundAlpha: 0.14
  });
}

//darkmode toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const icon = document.getElementById("toggle-icon");

  // Check if dark mode was enabled before
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-sun", "fa-moon");
    icon.classList.add("glow");
    initVanta(true);  // initialize with DARK MODE colors
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
    icon.classList.remove("glow");
    initVanta(false); // initialize with LIGHT MODE colors
  }

  // Toggle dark mode on button click
  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
      localStorage.setItem("darkMode", "enabled");
      icon.classList.replace("fa-sun", "fa-moon");
      icon.classList.add("glow");
    } else {
      localStorage.setItem("darkMode", "disabled");
      icon.classList.replace("fa-moon", "fa-sun");
      icon.classList.remove("glow");
    }

    // Re-initialize Vanta with new colors
    initVanta(isDarkMode);
  });
});



