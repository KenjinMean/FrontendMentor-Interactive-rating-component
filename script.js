let rate = "";
const rating = document.querySelectorAll(".rate__item");
const ratingValue = document.getElementById("rating-value");
const submitButton = document.getElementById("rate_submit");
const rateState = document.querySelector(".rate");
const thankState = document.querySelector(".thank");

rating.forEach((button) => {
  button.addEventListener("click", () => {
    rating.forEach((button) => {
      button.classList.contains("active") && button.classList.remove("active");
    });
    button.classList.add("active");
    submitButton.disabled = false;
    rate = button.innerHTML;
  });
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  rateState.classList.toggle("rate-transition");
  thankState.classList.toggle("thank-transition");
  ratingValue.innerHTML = rate;
});
