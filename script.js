let slideIndex = 0;
let autoPlayInterval;
function moveSlide(direction) {
  const slides = document.querySelector(".carousel-slide");
  const totalSlides = slides.querySelectorAll("img").length;

  slideIndex += direction;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  const slideWidth = document.querySelector(".carousel-slide img").clientWidth;
  slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

  resetAutoPlay();
}

function autoPlay() {
  moveSlide(1);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(autoPlay, 3000);

  window.onload = function () {
    autoPlayInterval = setInterval(autoPlay, 3000);

    document.querySelector(".carousel").addEventListener("mouseenter", () => {
      clearInterval(autoPlayInterval);
    });
  };
}
document.querySelector(".carousel").addEventListener("mouseleave", () => {
  resetAutoPlay();
});
// --------------------------------

const jewelryData = [
  {
    title: "Rings",
    image: "./image/Frame 155.png",
    category: "rings",
  },
  {
    title: "Earrings",
    image: "./image/Frame 156.png",
    category: "earrings",
  },
  {
    title: "Bracelets",
    image: "./image/Frame 157.png",
    category: "bracelets",
  },
  {
    title: "Pendants",
    image: "./image/Frame 158.png",
    category: "pendants",
  },
  {
    title: "Necklace",
    image: "./image/Frame 159.png",
    category: "necklace",
  },
];

function createJewelryCards() {
  const grid = document.getElementById("jewelryGrid");

  jewelryData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "jewelry-card";

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="overlay"></div>
      `;

    card.addEventListener("click", () => {
      console.log(`Clicked on ${item.title}`);
    });

    grid.appendChild(card);
  });
}

createJewelryCards();

// ---------------------------------------
// ---------------------------------------
const slider = document.querySelector(".testimonial-slider");
const slidess = document.querySelectorAll(".testimonial-slide");

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    slider.scrollTo({
      left: index * slide.offsetWidth,
      behavior: "smooth",
    });
  });
});
//   ---------------------------------------------
