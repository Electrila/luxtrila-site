const candles = [
  {
    name: "Neon Nights",
    description: "Cardamom + Sandalwood + Moss"
  },
  {
    name: "Dreamdrive",
    description: "Pine + Vanilla + Cedar"
  },
  {
    name: "Lucid Fuse",
    description: "Bergamot + Chocolate + Amber"
  },
  {
    name: "Chromafloat",
    description: "Jasmine + Citrus + Aquatic"
  },
  {
    name: "Hyperlume",
    description: "Lemon + Pink Grapefruit + Green Leaves"
  },
  {
    name: "Midnight Arcade",
    description: "Coffee + Smoke + Praline"
  }
];

let current = 0;

// Render carousel slides
function renderCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  const slide = document.createElement("div");
  slide.className = "carousel-slide";

  const prev = (current - 1 + candles.length) % candles.length;
  const next = (current + 1) % candles.length;

  [prev, current, next].forEach((index, i) => {
    const candle = document.createElement("div");
    candle.className = "candle";
    if (i === 1) {
      candle.classList.add("center");
    } else {
      // Enable click on side candles
      candle.addEventListener("click", () => {
        if (i === 0) prevCandle();
        if (i === 2) nextCandle();
      });
    }

    const img = document.createElement("div");
    img.className = "candle-img";
    img.textContent = candles[index].name;

    const desc = document.createElement("p");
    desc.textContent = candles[index].description;

    candle.appendChild(img);
    candle.appendChild(desc);
    slide.appendChild(candle);
  });

  carousel.appendChild(slide);
}

// Rotate carousel right
function nextCandle() {
  const carousel = document.getElementById("carousel");
  carousel.classList.add("rotate-left");
  setTimeout(() => {
    current = (current + 1) % candles.length;
    renderCarousel();
    carousel.classList.remove("rotate-left");
  }, 400);
}

// Rotate carousel left
function prevCandle() {
  const carousel = document.getElementById("carousel");
  carousel.classList.add("rotate-right");
  setTimeout(() => {
    current = (current - 1 + candles.length) % candles.length;
    renderCarousel();
    carousel.classList.remove("rotate-right");
  }, 400);
}

// Swipe gesture support for mobile
const swipeArea = document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchend", handleTouchEnd, false);

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  if (touchEndX < touchStartX - 30) {
    nextCandle(); // swipe left
  } else if (touchEndX > touchStartX + 30) {
    prevCandle(); // swipe right
  }
}

// Initialize on load
window.onload = () => {
  renderCarousel();
}