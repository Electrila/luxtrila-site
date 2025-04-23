particlesJS.load("particles-js", "assets/particles.json", function() {
    console.log("Particles loaded!");
  });

  document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("show");
  });