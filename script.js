const rates = document.querySelectorAll(".rates");
const submit = document.querySelector(".submit");
const ratingScore = document.getElementById("ratingScore");
const displayRating = document.querySelector(".display-rating");
const displayThanks = document.querySelector(".display-thanks");

displayThanks.style.display = "none";
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    ratingScore.innerHTML = rate.innerHTML;

    rate.classList.toggle("rateSelect");
    console.log("clicked");
  });
});

submit.addEventListener("click", () => {
  displayRating.style.display = "none";
  displayThanks.style.display = "flex";
});
