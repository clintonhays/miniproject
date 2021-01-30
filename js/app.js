// Variables

const nextArrow = document.getElementById("arrowNext");
const prevArrow = document.getElementById("arrowPrev");
const pip = document.querySelectorAll(".testimonials__counter_pip");

/* 
  Clicking the right arrow will slide the div to the left, revealing the 
  next card and moving the active class from the first to second pip
*/

nextArrow.addEventListener("click", () => {
  const cards = document.querySelector(".testimonial__cards");

  cards.style.transform = "translate(-50%)";

  pip[0].classList.remove("active");
  pip[1].classList.add("active");
});

/* 
  Clicking the left arrow will slide the div to the right, revealing the 
  previous card and moving the active class from the second to first pip
*/

prevArrow.addEventListener("click", () => {
  const cards = document.querySelector(".testimonial__cards");

  cards.style.transform = "translate(0%)";

  pip[1].classList.remove("active");
  pip[0].classList.add("active");
});
