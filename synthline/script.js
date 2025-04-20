console.log("Script is loaded");

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
      description: "Lemon + Grapefruit + Green Leaves"
    },
    {
      name: "Midnight Arcade",
      description: "Coffee + Praline + Smoke"
    }
  ];
  
  let current = 0;
  
  function renderCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';
  
    const prev = (current - 1 + candles.length) % candles.length;
    const next = (current + 1) % candles.length;
  
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
  
    [prev, current, next].forEach((index, i) => {
        const candle = document.createElement('div');
        candle.className = 'candle';
        if (i === 1) {
          candle.classList.add('center');
        } else {
          // Add click event to rotate carousel
          candle.addEventListener('click', () => {
            if (i === 0) {
              prevCandle();
            } else if (i === 2) {
              nextCandle();
            }
          });
        }
      
        const img = document.createElement('div');
        img.className = 'candle-img';
        img.textContent = candles[index].name;
      
        const desc = document.createElement('p');
        desc.textContent = candles[index].description;
      
        candle.appendChild(img);
        candle.appendChild(desc);
        slide.appendChild(candle);
      });
  
    carousel.appendChild(slide);
  }
  
  function nextCandle() {
    const carousel = document.getElementById('carousel');
    carousel.classList.add('rotate-left');
    setTimeout(() => {
      current = (current + 1) % candles.length;
      renderCarousel();
      carousel.classList.remove('rotate-left');
    }, 400);
  }
  
  function prevCandle() {
    const carousel = document.getElementById('carousel');
    carousel.classList.add('rotate-right');
    setTimeout(() => {
      current = (current - 1 + candles.length) % candles.length;
      renderCarousel();
      carousel.classList.remove('rotate-right');
    }, 400);
  }
  
  window.onload = () => {
    renderCarousel();
  };
  