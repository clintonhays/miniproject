// Variables

const nextArrow = document.getElementById("arrowNext");
const prevArrow = document.getElementById("arrowPrev");
const pip = document.querySelectorAll(".testimonials__counter_pip");

nextArrow.addEventListener("click", () => {
  const cards = document.querySelector(".testimonial__cards");

  cards.style.transform = "translate(-50%)";

  pip[0].classList.remove("active");
  pip[1].classList.add("active");
});

prevArrow.addEventListener("click", () => {
  const cards = document.querySelector(".testimonial__cards");

  cards.style.transform = "translate(0%)";

  pip[1].classList.remove("active");
  pip[0].classList.add("active");
});
