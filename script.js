/* WELL WORTH READING - script.js
      Two interactive features:
     1. Light and dark mode toggle
     2. Show and hide the extra reader reviews
*/


/* FEATURE 1: Light and dark mode toggle */

const themeButton = document.getElementById("darkmode");

if (themeButton) {

  themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeButton.innerHTML = "Light mode";
    } else {
      themeButton.innerHTML = "Dark mode";
    }

  });

}


/* FEATURE 2: Show and hide the extra reviews */

const reviewsButton = document.getElementById("showReviews");
const extraReviews = document.querySelectorAll(".reviewer.extra");

if (reviewsButton) {

  reviewsButton.addEventListener("click", function () {

    for (let i = 0; i < extraReviews.length; i++) {
      extraReviews[i].classList.toggle("visible");
    }

    if (extraReviews[0].classList.contains("visible")) {
      reviewsButton.innerHTML = "Show fewer reviews";
    } else {
      reviewsButton.innerHTML = "Show all reviews";
    }

  });

}
