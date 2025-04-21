const candles = [
  { name: "Neon Nights", description: "Cardamom + Sandalwood + Moss" },
  { name: "Dreamdrive", description: "Pine + Vanilla + Cedar" },
  { name: "Lucid Fuse", description: "Bergamot + Chocolate + Amber" },
  { name: "Chromafloat", description: "Jasmine + Citrus + Aquatic" },
  { name: "Hyperlume", description: "Lemon + Pink Grapefruit + Green Leaves" },
  { name: "Midnight Arcade", description: "Coffee + Praline + Smoke" }
];

let current = 0;

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
    if (i === 1) candle.classList.add("center");

    const img = document.createElement("div");
    img.className = "candle-img";
    img.textContent = candles[index].name;

    const desc = document.createElement("p");
    desc.textContent = candles[index].description;

    candle.appendChild(img);
    candle.appendChild(desc);

    if (i === 0) candle.onclick = prevCandle;
    if (i === 2) candle.onclick = nextCandle;

    slide.appendChild(candle);
  });

  carousel.appendChild(slide);
  renderDots();
}

function renderDots() {
  const dotContainer = document.getElementById("dotContainer");
  dotContainer.innerHTML = "";

  candles.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (index === current ? " active" : "");
    dot.onclick = () => {
      current = index;
      renderCarousel();
    };
    dotContainer.appendChild(dot);
  });
}

function nextCandle() {
  current = (current + 1) % candles.length;
  renderCarousel();
}

function prevCandle() {
  current = (current - 1 + candles.length) % candles.length;
  renderCarousel();
}

window.onload = () => {
  document.getElementById("prevBtn").onclick = prevCandle;
  document.getElementById("nextBtn").onclick = nextCandle;
  renderCarousel();
};