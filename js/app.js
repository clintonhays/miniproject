// Variables

const nextArrow = document.getElementById("arrowNext");
const prevArrow = document.getElementById("arrowPrev");

nextArrow.addEventListener("click", () => {
  const cards = document.querySelector(".testimonial__cards");

  cards.style.transform = "translate(-50%)";
});

prevArrow.addEventListener("click", () => {
  const cards = document.querySelector(".testimonial__cards");

  cards.style.transform = "translate(0%)";
});
