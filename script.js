particlesJS.load("particles-js", "assets/particles.json", function() {
    console.log("Particles loaded!");
  });

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});