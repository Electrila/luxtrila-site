particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#39ffec", "#e78bb6", "#ff66cc"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.95,
        random: true
      },
      size: {
        value: 3.5,
        random: true
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        out_mode: "out"
      },
      line_linked: {
        enable: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false },
        onclick: { enable: false }
      }
    },
    retina_detect: true
  });