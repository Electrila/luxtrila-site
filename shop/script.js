document.querySelectorAll('.image-carousel').forEach((carousel, index) => {
  const img = carousel.querySelector('.carousel-img');
  const left = carousel.querySelector('.left-arrow');
  const right = carousel.querySelector('.right-arrow');

  const images = {
    0: [
      'assets/dream-shard.png',
      'assets/dream-shard-product-shot-2.png',
      'assets/dream-shard-product-shot.png'
    ],
    1: [
      'assets/frostbyte-product-shot-2.png',
      'assets/frostbyte-product-shot.png',
      'assets/frostbyte.png'
    ],
    2: [
      'assets/terminal-roast-product-shot.png',
      'assets/terminal-roast-product-shot-2.png',
      'assets/terminal-roast-product-shot-3.png'
    ],
    3: [
      'assets/stratoberry-product-shot.png',
      'assets/stratoberry.png'
    ],
    4: [
      'assets/chromafloat-product-shot-4.png',
      'assets/chromafloat-product-shot-3.png',
      'assets/chromafloat.png'
    ]
  };

  let i = 0;
  left.addEventListener('click', () => {
    i = (i - 1 + images[index].length) % images[index].length;
    img.src = images[index][i];
  });

  right.addEventListener('click', () => {
    i = (i + 1) % images[index].length;
    img.src = images[index][i];
  });
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
