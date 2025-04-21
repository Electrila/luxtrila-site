const candles = [
  {
    name: "Neon Nights",
    description: "Electric jasmine & plum under neon skies."
  },
  {
    name: "Dreamdrive",
    description: "Cool ozone & bergamot on midnight roads."
  },
  {
    name: "Lucid Fuse",
    description: "Pink pepper & vanilla sparks with cedar."
  },
  {
    name: "Chromafloat",
    description: "Crushed orchid & ambient amber uplift."
  },
  {
    name: "Hyperlume",
    description: "Lemon drift, mint, and synthetic clarity."
  },
  {
    name: "Midnight Arcade",
    description: "Hot caramel & cola fizz in velvet glow."
  }
];

let current = 0;

function renderCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  const slide = document.createElement("div");
  slide.className = "carousel-slide";

  candles.forEach((candleData, index) => {
    const candle = document.createElement("div");
    candle.className = "candle";

    // Rotation logic
    const angle = (index - current) * 60;
    candle.style.transform = `rotateY(${angle}deg) translateZ(300px)`;
    if (index === current) candle.classList.add("center");

    // Make side candles clickable
    candle.addEventListener("click", () => {
      if (index !== current) {
        current = index;
        renderCarousel();
      }
    });

    const img = document.createElement("div");
    img.className = "candle-img";
    img.textContent = candleData.name;

    const desc = document.createElement("p");
    desc.textContent = candleData.description;

    candle.appendChild(img);
    candle.appendChild(desc);
    slide.appendChild(candle);
  });

  carousel.appendChild(slide);
  renderDots();
  addSwipeListeners(slide);
}

function renderDots() {
  const existing = document.querySelector(".dot-container");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.className = "dot-container";

  candles.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (index === current ? " active" : "");
    dot.addEventListener("click", () => {
      current = index;
      renderCarousel();
    });
    container.appendChild(dot);
  });

  document.querySelector("main").appendChild(container);
}

// Swipe + Drag support
let startX = 0;
let currentX = 0;
let isDragging = false;
let dragStartTime = 0;

function addSwipeListeners(slide) {
  slide.addEventListener("touchstart", onDragStart, { passive: true });
  slide.addEventListener("touchmove", onDragMove, { passive: true });
  slide.addEventListener("touchend", onDragEnd);

  slide.addEventListener("mousedown", onDragStart);
  slide.addEventListener("mousemove", onDragMove);
  slide.addEventListener("mouseup", onDragEnd);
  slide.addEventListener("mouseleave", onDragEnd);
}

function onDragStart(e) {
  isDragging = true;
  dragStartTime = Date.now();
  startX = getX(e);
  currentX = startX;
}

function onDragMove(e) {
  if (!isDragging) return;
  currentX = getX(e);
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;

  const deltaX = currentX - startX;
  const timeDiff = Date.now() - dragStartTime;
  const velocity = deltaX / timeDiff;

  if (deltaX < -50 || velocity < -0.3) {
    current = (current + 1) % candles.length;
  } else if (deltaX > 50 || velocity > 0.3) {
    current = (current - 1 + candles.length) % candles.length;
  }
  renderCarousel();
}

function getX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX;
}

// Init
window.onload = () => {
  renderCarousel();
};
